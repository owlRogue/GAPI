var settings = [

                conditions = {
                    default: ['1','2','3','4','5'],
                    bool: ['pass', 'fail'],
                    custom: []
                },
                operators = {
                    op1: ['>=', '<', '>'],
                    op2: ['<=', '>', '<'],
                    custom: []
                },
                targetFunc = {
                    target: []
                },
                
                valueParam = {
                    vP: []
                }
            
        ];
        
var setup = [
            fcr = {
                condition: conditions.default,
                operator: operators.op1,
                target: 'high' ,
                valueParams: [(90), (80), (70), (60)]
            },
            
            agent_ease = {
                condition: conditions.default,
                operator: operators.op1,
                target: 'high',
                valueParams: [(9.8), (9.3), (8.8), (7.0)]
            },
            
            replacement_rate = {
                condition: conditions.default,
                operator: operators.op1,
                target: 'low',
                valueParams: [(8.8), (7.3), (6.8), (5.0)]
            },
            
            aux = {
                condition: conditions.default,
                operator: operators.op1,
                target: 'low',
                valueParams: [(40), (30), (20), (17)]
            },

            aht = {
                condition: conditions.default,
                operator: operators.op1,
                target: 'low',
                valueParams: [(600), (720), (840), (1050)]
            },
            deltacast = {
                condition: conditions.bool,
                operator: operators.op1,
                target: 'bool',
                valueParams: [(99.0)]
            }
        ]