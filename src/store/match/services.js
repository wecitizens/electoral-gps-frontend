import API from "../_helpers/api";

const matchService = {
    
    // in current app, match will be called twice, once for politician, once for parties
    async match(matchRequest  = {}) {
        
        // further implementation, see code in https://github.com/wecitizens/electoral-gps-frontend/issues/17
        
        // stub data
        matchRequest  = {
            "segment_key": '2018_be_municipal_be_6850_politician',
            "answer_formats":
                [
                    {
                        "key": "agr_5_scale_tol_3_scale_abs",
                        "items":
                            [
                                {
                                    "key": "fully_agree",
                                    "name": "answer_format_item_fully_agree",
                                    "weight": 100
                                },
                                {
                                    "key": "rather_yes",
                                    "name": "answer_format_rather_yes",
                                    "weight": 75
                                },
                                {
                                    "key": "no_opinion",
                                    "name": "answer_format_item_no_opinion",
                                    "weight": 50
                                },
                                {
                                    "key": "rather_no",
                                    "name": "answer_format_item_rather_no",
                                    "weight": 25
                                },
                                {
                                    "key": "strongly_disagree",
                                    "name": "answer_format_item_strongly_disagree",
                                    "weight": 0
                                }
                            ],
                        "tolerance": {
                            "absolute": true,
                            "items": [
                                {
                                    "key": "very_important",
                                    "name": "answer_format_tolerance_item_very_important",
                                    "weight": 2.5
                                },
                                {
                                    "key": "important",
                                    "name": "answer_format_tolerance_item_important",
                                    "weight": 1
                                },
                                {
                                    "key": "not_important",
                                    "name": "answer_format_tolerance_item_not_important",
                                    "weight": 0.4
                                }
                            ]
                        }
                    }
                ],
            answers: [
                {
                    question_key: "q1",
                    answer_format: "agr_5_scale_tol_3_scale_abs",
                    value: "rather_yes",
                    tolerance: "very_important"
                },
                {
                    question_key: "q2",
                    answer_format: "agr_5_scale_tol_3_scale_abs",
                    value: "rather_no",
                    tolerance: "not_important"
                }
            ]
        };

        const data = await API.get('/api/vote/district.json', data).then((request) => {
            return request.data.data
        })
        
        
        
        // return list of users with the score
    }
};

export default matchService;