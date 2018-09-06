import API from "../_helpers/api";
import LA from 'look-alike';
import LAUtil from '../../../node_modules/look-alike/lib/util';

const matchService = {
    
    // in current app, match will be called twice, once for politician, once for parties
    async match(matchRequest  = {}) {
        
        // further implementation, see code in https://github.com/wecitizens/electoral-gps-frontend/issues/17
        
        // stub data

        matchRequest = {
            "segment_key": '2018_be_municipal_be_6850_politician',
            "answer_formats":
                [
                    {
                        "key": "agr_5_scale_tol_3_scale_abs",
                        "items": [
                            {
                                "key": "strongly_agree",
                                "name": "answer_format.item.strongly_agree",
                                "weight": 100
                            },
                            {
                                "key": "agree",
                                "name": "answer_format.item.agree",
                                "weight": 75
                            },
                            {
                                "key": "no_opinion",
                                "name": "answer_format.item.no_opinion",
                                "weight": 50
                            },
                            {
                                "key": "disagree",
                                "name": "answer_format.item.disagree",
                                "weight": 25
                            },
                            {
                                "key": "strongly_disagree",
                                "name": "answer_format.item.strongly_disagree",
                                "weight": 0
                            }
                        ],
                        "tolerance": {
                            "items": [
                                {
                                    "key": "not_important",
                                    "name": "answer_format.tolerance.item.not_important",
                                    "weight": 0.4
                                },
                                {
                                    "key": "important",
                                    "name": "answer_format.tolerance.item.important",
                                    "weight": 1
                                },
                                {
                                    "key": "very_important",
                                    "name": "answer_format.tolerance.item.very_important",
                                    "weight": 2.5
                                }
                            ]
                        }
                    }
                ],
            answers: [
                {
                    question_key: "question_103",
                    answer_format: "agr_5_scale_tol_3_scale_abs",
                    value: "agree",
                    tolerance: "very_important"
                },
                {
                    question_key: "question_104",
                    answer_format: "agr_5_scale_tol_3_scale_abs",
                    value: "disagree",
                    tolerance: "important"
                }
            ]
        };

        const data = [
            {
                "user_key": "be_politician_1",
                "question_key": "question_103",
                "value": "agree"
            },
            {
                "user_key": "be_politician_1",
                "question_key": "question_104",
                "value": "strongly_disagree"
            },
            {
                "user_key": "be_politician_2",
                "question_key": "question_103",
                "value": "agree"
            },
            {
                "user_key": "be_politician_2",
                "question_key": "question_104",
                "value": "strongly_agree"
            }
        ];

        const answer_formats = matchRequest.answer_formats;
        const a = matchRequest.answers;

        const subject = matchRequest.answers.reduce(
            (accumulator, target) => ({
                ...accumulator,
                [target.question_key]:
                answer_formats.find(x => x.key = target.answer_format)
                    .items.find(x => x.key === target.value).weight
            }),
            {});

        const weights = matchRequest.answers.reduce(
            (accumulator, target) => ({
                ...accumulator,
                [target.question_key]:
                answer_formats.find(x => x.key = target.answer_format).tolerance
                    .items.find(x => x.key === target.tolerance).weight
            }),
            {});

        const t = data.reduce(
            function (acc, t) {

                let u = {};

                if (acc.hasOwnProperty(t.user_key))
                    u = acc[t.user_key];

                const q = a.find(aa => aa.question_key == t.question_key);

                u[t.question_key] = answer_formats.find(x => x.key == q.answer_format).items.find(x => x.key ==  t.value).weight;
                acc[t.user_key] = u;
                return acc;

            }
            , {});


        console.log("My choice : ");
        console.log(subject);

        console.log("My tolerance : ");
        console.log(weights);

        const answers = Object.keys(t).map(k => {return {key: k, answers: t[k]}});
        console.log("Segment answers : ");
        console.log(answers);

       const tree = new LA(answers,
            null,
            function (r) {
                return r.answers;
            }
        );

        const results = tree.query({key: "subject", answers: subject}, {
            k: answers.length, // number of match
            normalize: false,
            weights: weights
        });

// works for one format only
        const itemWeightMax = answer_formats[0].items.map(i => i.weight).reduce((p,c) => {
            return c > p ? c : p;
        },0);

        const distanceMax = Math.sqrt(
            Object.values(weights).reduce((p,c) => {
                return p + Math.pow(c*itemWeightMax,2)
            }, 0));

        console.log("Max weight : ");
        console.log(itemWeightMax);

        console.log("Max distance : ");
        console.log(distanceMax);

        const scores = results.map(r => {

            const distance = LAUtil.distance(r.answers, subject, {weights: weights});
            const match = 100 * (1 - distance / distanceMax);

            return {
                key: r.key,
                score: match
            }
        });

        console.log("My scores : ");
        console.log(scores);
        
        return scores;      
        
    }
};

export default matchService;