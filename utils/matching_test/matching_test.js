LA = require('look-alike');
LAUtil = require('../../node_modules/look-alike/lib/util');
Match = require('../../src/store/gps/match');


function perform() {
    const matchRequest = {
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

    const segmentData = [
        /* {
             "user_key": "be_politician_1",
             "question_key": "question_103",
             "value": "agree"
         }, */
        {
            "user_key": "be_politician_1",
            "question_key": "question_104",
            "value": "strongly_disagree"
        },
        /* {
             "user_key": "be_politician_2",
             "question_key": "question_103",
             "value": "agree"
         },*/
        {
            "user_key": "be_politician_2",
            "question_key": "question_104",
            "value": "strongly_agree"
        }
    ];

    // TODO : How to unit test vue modules ...
    const score = Match.performMatch(matchRequest, segmentData);

    console.log("My scores : ");
    console.log(score);
}

perform();