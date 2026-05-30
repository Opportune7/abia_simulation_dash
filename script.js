const rawProjects = [{"id":1,"name":"Free Maternal Care Programme - Ukwa West","budget":1674000000,"spend":83700000,"utilisation":5,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Education","lga":"Ukwa West","priority":"Priority","progress":0,"status":"Not started","sdg":"SDG 4","directPeople":9671,"indirectPeople":35832,"totalImpacted":45503,"jobsCreated":450,"womenPct":36,"youthPct":38},{"id":2,"name":"Township Road Rehabilitation - Osisioma","budget":3288000000,"spend":2794800000,"utilisation":85,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Housing","lga":"Osisioma","priority":"Non-priority","progress":96,"status":"Completed","sdg":"SDG 7","directPeople":3296,"indirectPeople":11400,"totalImpacted":14696,"jobsCreated":323,"womenPct":26,"youthPct":37},{"id":3,"name":"Women Empowerment Grant - Ukwa East","budget":690000000,"spend":476100000,"utilisation":69,"year":2025,"cluster":"Social: Services","mda":"Ministry of Youth \u0026 Sports","lga":"Ukwa East","priority":"Priority","progress":33,"status":"In progress","sdg":"SDG 5","directPeople":2751,"indirectPeople":6215,"totalImpacted":8966,"jobsCreated":446,"womenPct":55,"youthPct":50},{"id":4,"name":"Judiciary Case Management System - Ikwuano","budget":1117000000,"spend":1016470000,"utilisation":91,"year":2025,"cluster":"Governance","mda":"Ministry of Justice","lga":"Ikwuano","priority":"Non-priority","progress":100,"status":"Completed","sdg":"SDG 10","directPeople":7550,"indirectPeople":13917,"totalImpacted":21467,"jobsCreated":75,"womenPct":26,"youthPct":44},{"id":5,"name":"Rural Bridge Construction - Umunneochi","budget":3768000000,"spend":3692640000,"utilisation":98,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Housing","lga":"Umunneochi","priority":"Non-priority","progress":98,"status":"Completed","sdg":"SDG 7","directPeople":2280,"indirectPeople":9095,"totalImpacted":11375,"jobsCreated":342,"womenPct":57,"youthPct":47},{"id":6,"name":"Solar Streetlight Deployment - Osisioma","budget":4341000000,"spend":3776670000,"utilisation":87,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Power","lga":"Osisioma","priority":"Non-priority","progress":90,"status":"In progress","sdg":"SDG 11","directPeople":7138,"indirectPeople":20436,"totalImpacted":27574,"jobsCreated":184,"womenPct":29,"youthPct":58},{"id":7,"name":"Digital Civil Service Rollout - Umunneochi","budget":1169000000,"spend":1122240000,"utilisation":96,"year":2025,"cluster":"Governance","mda":"Ministry of Finance","lga":"Umunneochi","priority":"Non-priority","progress":99,"status":"Completed","sdg":"SDG 10","directPeople":1941,"indirectPeople":4915,"totalImpacted":6856,"jobsCreated":106,"womenPct":48,"youthPct":43},{"id":8,"name":"Digital Civil Service Rollout - Umunneochi","budget":1043000000,"spend":792680000,"utilisation":76,"year":2025,"cluster":"Governance","mda":"Bureau of Public Procurement","lga":"Umunneochi","priority":"Non-priority","progress":15,"status":"In progress","sdg":"SDG 17","directPeople":5155,"indirectPeople":19021,"totalImpacted":24176,"jobsCreated":546,"womenPct":32,"youthPct":54},{"id":9,"name":"Rural Bridge Construction - Aba North","budget":2214000000,"spend":2214000000,"utilisation":100,"year":2026,"cluster":"Infrastructure","mda":"Ministry of Works","lga":"Aba North","priority":"Non-priority","progress":96,"status":"Completed","sdg":"SDG 11","directPeople":9328,"indirectPeople":37045,"totalImpacted":46373,"jobsCreated":106,"womenPct":31,"youthPct":52},{"id":10,"name":"Tax Reform Implementation - Isuikwuato","budget":1080000000,"spend":712800000,"utilisation":66,"year":2025,"cluster":"Governance","mda":"Ministry of Justice","lga":"Isuikwuato","priority":"Non-priority","progress":52,"status":"In progress","sdg":"SDG 17","directPeople":4462,"indirectPeople":13267,"totalImpacted":17729,"jobsCreated":149,"womenPct":36,"youthPct":42},{"id":11,"name":"Digital Civil Service Rollout - Bende","budget":411000000,"spend":361680000,"utilisation":88,"year":2025,"cluster":"Governance","mda":"Bureau of Public Procurement","lga":"Bende","priority":"Non-priority","progress":98,"status":"Completed","sdg":"SDG 16","directPeople":3956,"indirectPeople":9692,"totalImpacted":13648,"jobsCreated":430,"womenPct":57,"youthPct":62},{"id":12,"name":"Solar Streetlight Deployment - Ukwa West","budget":1416000000,"spend":495600000,"utilisation":35,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Works","lga":"Ukwa West","priority":"Non-priority","progress":76,"status":"In progress","sdg":"SDG 7","directPeople":6478,"indirectPeople":18554,"totalImpacted":25032,"jobsCreated":591,"womenPct":42,"youthPct":64},{"id":13,"name":"Community Sports Complex - Aba North","budget":925000000,"spend":74000000,"utilisation":8,"year":2025,"cluster":"Social: Services","mda":"Ministry of Environment","lga":"Aba North","priority":"Priority","progress":0,"status":"Not started","sdg":"SDG 2","directPeople":7691,"indirectPeople":27629,"totalImpacted":35320,"jobsCreated":514,"womenPct":46,"youthPct":44},{"id":14,"name":"Rural Bridge Construction - Umuahia North","budget":4348000000,"spend":3695800000,"utilisation":85,"year":2025,"cluster":"Infrastructure","mda":"Abia Roads Agency","lga":"Umuahia North","priority":"Non-priority","progress":97,"status":"Completed","sdg":"SDG 6","directPeople":1734,"indirectPeople":5409,"totalImpacted":7143,"jobsCreated":439,"womenPct":58,"youthPct":65},{"id":15,"name":"Rural Bridge Construction - Arochukwu","budget":2652000000,"spend":2121600000,"utilisation":80,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Housing","lga":"Arochukwu","priority":"Priority","progress":69,"status":"In progress","sdg":"SDG 9","directPeople":18966,"indirectPeople":37739,"totalImpacted":56705,"jobsCreated":403,"womenPct":43,"youthPct":48},{"id":16,"name":"Drainage \u0026 Erosion Control - Isuikwuato","budget":1923000000,"spend":1326870000,"utilisation":69,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Power","lga":"Isuikwuato","priority":"Priority","progress":56,"status":"In progress","sdg":"SDG 9","directPeople":10830,"indirectPeople":19895,"totalImpacted":30725,"jobsCreated":12,"womenPct":30,"youthPct":68},{"id":17,"name":"SME Capital Grant Scheme - Isuikwuato","budget":793000000,"spend":745420000,"utilisation":94,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Isuikwuato","priority":"Priority","progress":99,"status":"Completed","sdg":"SDG 1","directPeople":1407,"indirectPeople":5510,"totalImpacted":6917,"jobsCreated":815,"womenPct":48,"youthPct":62},{"id":18,"name":"Township Road Rehabilitation - Obingwa","budget":1904000000,"spend":1180480000,"utilisation":62,"year":2025,"cluster":"Infrastructure","mda":"Abia Roads Agency","lga":"Obingwa","priority":"Priority","progress":65,"status":"In progress","sdg":"SDG 9","directPeople":23454,"indirectPeople":36479,"totalImpacted":59933,"jobsCreated":244,"womenPct":37,"youthPct":41},{"id":19,"name":"Farm Input Subsidy - Bende","budget":1039000000,"spend":72730000,"utilisation":7,"year":2026,"cluster":"Social: Services","mda":"Ministry of Environment","lga":"Bende","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 1","directPeople":4635,"indirectPeople":16337,"totalImpacted":20972,"jobsCreated":194,"womenPct":42,"youthPct":60},{"id":20,"name":"Public Housing Estate - Ohafia","budget":2097000000,"spend":1782450000,"utilisation":85,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Housing","lga":"Ohafia","priority":"Non-priority","progress":65,"status":"In progress","sdg":"SDG 7","directPeople":6434,"indirectPeople":23772,"totalImpacted":30206,"jobsCreated":197,"womenPct":56,"youthPct":47},{"id":21,"name":"Digital Civil Service Rollout - Ukwa West","budget":380000000,"spend":19000000,"utilisation":5,"year":2026,"cluster":"Governance","mda":"Bureau of Public Procurement","lga":"Ukwa West","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 10","directPeople":2343,"indirectPeople":7209,"totalImpacted":9552,"jobsCreated":465,"womenPct":51,"youthPct":59},{"id":22,"name":"Leather Cluster Modernisation - Umunneochi","budget":1629000000,"spend":863370000,"utilisation":53,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Umunneochi","priority":"Non-priority","progress":47,"status":"In progress","sdg":"SDG 8","directPeople":5004,"indirectPeople":16479,"totalImpacted":21483,"jobsCreated":569,"womenPct":27,"youthPct":37},{"id":23,"name":"SME Capital Grant Scheme - Isiala Ngwa South","budget":252000000,"spend":224280000,"utilisation":89,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Ministry of Trade \u0026 Investment","lga":"Isiala Ngwa South","priority":"Non-priority","progress":99,"status":"Completed","sdg":"SDG 12","directPeople":6878,"indirectPeople":21083,"totalImpacted":27961,"jobsCreated":985,"womenPct":56,"youthPct":44},{"id":24,"name":"Export Readiness Programme - Ikwuano","budget":1030000000,"spend":288400000,"utilisation":28,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Ministry of SMEs","lga":"Ikwuano","priority":"Priority","progress":59,"status":"In progress","sdg":"SDG 9","directPeople":9449,"indirectPeople":30452,"totalImpacted":39901,"jobsCreated":994,"womenPct":29,"youthPct":32},{"id":25,"name":"Artisan Skills Hub - Ikwuano","budget":747000000,"spend":560250000,"utilisation":75,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Ministry of SMEs","lga":"Ikwuano","priority":"Non-priority","progress":17,"status":"In progress","sdg":"SDG 12","directPeople":6430,"indirectPeople":15687,"totalImpacted":22117,"jobsCreated":234,"womenPct":52,"youthPct":50},{"id":26,"name":"Leather Cluster Modernisation - Ukwa East","budget":1723000000,"spend":1602390000,"utilisation":93,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Ministry of Trade \u0026 Investment","lga":"Ukwa East","priority":"Non-priority","progress":95,"status":"Completed","sdg":"SDG 1","directPeople":5462,"indirectPeople":11014,"totalImpacted":16476,"jobsCreated":837,"womenPct":33,"youthPct":35},{"id":27,"name":"Scholarship Disbursement - Ohafia","budget":410000000,"spend":24600000,"utilisation":6,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"Primary Healthcare Agency","lga":"Ohafia","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 4","directPeople":7245,"indirectPeople":11720,"totalImpacted":18965,"jobsCreated":202,"womenPct":50,"youthPct":60},{"id":28,"name":"Open Budget Portal - Isuikwuato","budget":1030000000,"spend":1030000000,"utilisation":100,"year":2025,"cluster":"Governance","mda":"Ministry of Finance","lga":"Isuikwuato","priority":"Non-priority","progress":95,"status":"Completed","sdg":"SDG 17","directPeople":1851,"indirectPeople":4959,"totalImpacted":6810,"jobsCreated":310,"womenPct":47,"youthPct":49},{"id":29,"name":"Teacher Training Programme - Ugwunagbo","budget":1977000000,"spend":771030000,"utilisation":39,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Health","lga":"Ugwunagbo","priority":"Priority","progress":51,"status":"In progress","sdg":"SDG 3","directPeople":18428,"indirectPeople":29246,"totalImpacted":47674,"jobsCreated":519,"womenPct":38,"youthPct":47},{"id":30,"name":"Judiciary Case Management System - Aba North","budget":807000000,"spend":516480000,"utilisation":64,"year":2026,"cluster":"Governance","mda":"Bureau of Public Procurement","lga":"Aba North","priority":"Priority","progress":19,"status":"In progress","sdg":"SDG 10","directPeople":6723,"indirectPeople":18180,"totalImpacted":24903,"jobsCreated":312,"womenPct":42,"youthPct":48},{"id":31,"name":"Solar Streetlight Deployment - Umuahia South","budget":3848000000,"spend":115440000,"utilisation":3,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Works","lga":"Umuahia South","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 9","directPeople":10042,"indirectPeople":37723,"totalImpacted":47765,"jobsCreated":283,"womenPct":27,"youthPct":53},{"id":32,"name":"Drainage \u0026 Erosion Control - Isuikwuato","budget":4771000000,"spend":954200000,"utilisation":20,"year":2026,"cluster":"Infrastructure","mda":"Ministry of Power","lga":"Isuikwuato","priority":"Priority","progress":51,"status":"In progress","sdg":"SDG 6","directPeople":21906,"indirectPeople":36267,"totalImpacted":58173,"jobsCreated":315,"womenPct":42,"youthPct":57},{"id":33,"name":"Water Reticulation Project - Ukwa West","budget":4209000000,"spend":336720000,"utilisation":8,"year":2026,"cluster":"Infrastructure","mda":"Ministry of Housing","lga":"Ukwa West","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 7","directPeople":2884,"indirectPeople":4969,"totalImpacted":7853,"jobsCreated":596,"womenPct":26,"youthPct":50},{"id":34,"name":"Skills Acquisition Centre - Ukwa East","budget":804000000,"spend":723600000,"utilisation":90,"year":2025,"cluster":"Social: Services","mda":"Ministry of Environment","lga":"Ukwa East","priority":"Non-priority","progress":95,"status":"Completed","sdg":"SDG 2","directPeople":5852,"indirectPeople":9515,"totalImpacted":15367,"jobsCreated":91,"womenPct":33,"youthPct":55},{"id":35,"name":"Digital Civil Service Rollout - Ugwunagbo","budget":837000000,"spend":16740000,"utilisation":2,"year":2025,"cluster":"Governance","mda":"Bureau of Public Procurement","lga":"Ugwunagbo","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 10","directPeople":4821,"indirectPeople":18072,"totalImpacted":22893,"jobsCreated":285,"womenPct":38,"youthPct":64},{"id":36,"name":"Teacher Training Programme - Isuikwuato","budget":464000000,"spend":241280000,"utilisation":52,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Education","lga":"Isuikwuato","priority":"Non-priority","progress":75,"status":"In progress","sdg":"SDG 3","directPeople":14556,"indirectPeople":52213,"totalImpacted":66769,"jobsCreated":241,"womenPct":46,"youthPct":37},{"id":37,"name":"Farm Input Subsidy - Umuahia North","budget":1080000000,"spend":259200000,"utilisation":24,"year":2026,"cluster":"Social: Services","mda":"Ministry of Women Affairs","lga":"Umuahia North","priority":"Non-priority","progress":15,"status":"In progress","sdg":"SDG 2","directPeople":945,"indirectPeople":3566,"totalImpacted":4511,"jobsCreated":10,"womenPct":26,"youthPct":51},{"id":38,"name":"Leather Cluster Modernisation - Osisioma","budget":517000000,"spend":118910000,"utilisation":23,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Osisioma","priority":"Priority","progress":64,"status":"In progress","sdg":"SDG 1","directPeople":7626,"indirectPeople":22680,"totalImpacted":30306,"jobsCreated":922,"womenPct":45,"youthPct":47},{"id":39,"name":"Public Housing Estate - Osisioma","budget":1984000000,"spend":198400000,"utilisation":10,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Power","lga":"Osisioma","priority":"Priority","progress":0,"status":"Not started","sdg":"SDG 6","directPeople":10686,"indirectPeople":31960,"totalImpacted":42646,"jobsCreated":209,"womenPct":48,"youthPct":69},{"id":40,"name":"Youth Tech Fellowship - Isiala Ngwa North","budget":223000000,"spend":129340000,"utilisation":58,"year":2026,"cluster":"Social: Services","mda":"Ministry of Environment","lga":"Isiala Ngwa North","priority":"Non-priority","progress":89,"status":"In progress","sdg":"SDG 15","directPeople":7813,"indirectPeople":12135,"totalImpacted":19948,"jobsCreated":395,"womenPct":46,"youthPct":70},{"id":41,"name":"Tax Reform Implementation - Bende","budget":299000000,"spend":284050000,"utilisation":95,"year":2026,"cluster":"Governance","mda":"Ministry of Finance","lga":"Bende","priority":"Priority","progress":100,"status":"Completed","sdg":"SDG 17","directPeople":3996,"indirectPeople":11094,"totalImpacted":15090,"jobsCreated":225,"womenPct":41,"youthPct":37},{"id":42,"name":"Water Reticulation Project - Umuahia North","budget":2664000000,"spend":1704960000,"utilisation":64,"year":2025,"cluster":"Infrastructure","mda":"Abia Roads Agency","lga":"Umuahia North","priority":"Non-priority","progress":49,"status":"In progress","sdg":"SDG 6","directPeople":10700,"indirectPeople":32786,"totalImpacted":43486,"jobsCreated":251,"womenPct":31,"youthPct":30},{"id":43,"name":"Free Maternal Care Programme - Isiala Ngwa North","budget":395000000,"spend":118500000,"utilisation":30,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Education","lga":"Isiala Ngwa North","priority":"Priority","progress":68,"status":"In progress","sdg":"SDG 4","directPeople":25767,"indirectPeople":52512,"totalImpacted":78279,"jobsCreated":174,"womenPct":47,"youthPct":44},{"id":44,"name":"Tax Reform Implementation - Isuikwuato","budget":1067000000,"spend":106700000,"utilisation":10,"year":2026,"cluster":"Governance","mda":"Bureau of Public Procurement","lga":"Isuikwuato","priority":"Priority","progress":0,"status":"Not started","sdg":"SDG 16","directPeople":5750,"indirectPeople":11130,"totalImpacted":16880,"jobsCreated":400,"womenPct":46,"youthPct":60},{"id":45,"name":"Youth Tech Fellowship - Isiala Ngwa South","budget":90000000,"spend":900000,"utilisation":1,"year":2025,"cluster":"Social: Services","mda":"Ministry of Youth \u0026 Sports","lga":"Isiala Ngwa South","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 2","directPeople":4369,"indirectPeople":12263,"totalImpacted":16632,"jobsCreated":363,"womenPct":59,"youthPct":51},{"id":46,"name":"Hospital Equipment Supply - Umunneochi","budget":1154000000,"spend":611620000,"utilisation":53,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"Primary Healthcare Agency","lga":"Umunneochi","priority":"Priority","progress":55,"status":"In progress","sdg":"SDG 3","directPeople":12290,"indirectPeople":29859,"totalImpacted":42149,"jobsCreated":208,"womenPct":48,"youthPct":65},{"id":47,"name":"Farm Input Subsidy - Osisioma","budget":520000000,"spend":10400000,"utilisation":2,"year":2025,"cluster":"Social: Services","mda":"Ministry of Women Affairs","lga":"Osisioma","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 13","directPeople":3546,"indirectPeople":5694,"totalImpacted":9240,"jobsCreated":101,"womenPct":27,"youthPct":35},{"id":48,"name":"Judiciary Case Management System - Obingwa","budget":554000000,"spend":232680000,"utilisation":42,"year":2025,"cluster":"Governance","mda":"Ministry of Finance","lga":"Obingwa","priority":"Priority","progress":71,"status":"In progress","sdg":"SDG 10","directPeople":7136,"indirectPeople":15413,"totalImpacted":22549,"jobsCreated":76,"womenPct":55,"youthPct":45},{"id":49,"name":"Trade Fair Pavilion Upgrade - Aba North","budget":1602000000,"spend":1409760000,"utilisation":88,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Aba North","priority":"Non-priority","progress":100,"status":"Completed","sdg":"SDG 8","directPeople":7782,"indirectPeople":20448,"totalImpacted":28230,"jobsCreated":461,"womenPct":26,"youthPct":46},{"id":50,"name":"Export Readiness Programme - Obingwa","budget":568000000,"spend":545280000,"utilisation":96,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Ministry of SMEs","lga":"Obingwa","priority":"Priority","progress":96,"status":"Completed","sdg":"SDG 1","directPeople":9578,"indirectPeople":37734,"totalImpacted":47312,"jobsCreated":923,"womenPct":56,"youthPct":40},{"id":51,"name":"Hospital Equipment Supply - Ukwa East","budget":2350000000,"spend":1997500000,"utilisation":85,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"Primary Healthcare Agency","lga":"Ukwa East","priority":"Priority","progress":95,"status":"Completed","sdg":"SDG 5","directPeople":34385,"indirectPeople":109307,"totalImpacted":143692,"jobsCreated":384,"womenPct":28,"youthPct":55},{"id":52,"name":"School Renovation Initiative - Aba North","budget":471000000,"spend":471000000,"utilisation":100,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"SUBEB","lga":"Aba North","priority":"Priority","progress":100,"status":"Completed","sdg":"SDG 4","directPeople":20444,"indirectPeople":41172,"totalImpacted":61616,"jobsCreated":29,"womenPct":53,"youthPct":32},{"id":53,"name":"Waste Management Expansion - Ugwunagbo","budget":375000000,"spend":348750000,"utilisation":93,"year":2026,"cluster":"Social: Services","mda":"Ministry of Youth \u0026 Sports","lga":"Ugwunagbo","priority":"Non-priority","progress":98,"status":"Completed","sdg":"SDG 5","directPeople":4882,"indirectPeople":15354,"totalImpacted":20236,"jobsCreated":359,"womenPct":27,"youthPct":65},{"id":54,"name":"Primary Health Centre Upgrade - Isuikwuato","budget":2365000000,"spend":2223100000,"utilisation":94,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"Primary Healthcare Agency","lga":"Isuikwuato","priority":"Priority","progress":96,"status":"Completed","sdg":"SDG 4","directPeople":22271,"indirectPeople":64504,"totalImpacted":86775,"jobsCreated":262,"womenPct":39,"youthPct":44},{"id":55,"name":"Water Reticulation Project - Aba South","budget":4389000000,"spend":1360590000,"utilisation":31,"year":2026,"cluster":"Infrastructure","mda":"Ministry of Housing","lga":"Aba South","priority":"Non-priority","progress":74,"status":"In progress","sdg":"SDG 6","directPeople":7560,"indirectPeople":23685,"totalImpacted":31245,"jobsCreated":246,"womenPct":32,"youthPct":69},{"id":56,"name":"Skills Acquisition Centre - Umunneochi","budget":362000000,"spend":166520000,"utilisation":46,"year":2026,"cluster":"Social: Services","mda":"Ministry of Youth \u0026 Sports","lga":"Umunneochi","priority":"Priority","progress":75,"status":"In progress","sdg":"SDG 2","directPeople":8769,"indirectPeople":20943,"totalImpacted":29712,"jobsCreated":575,"womenPct":27,"youthPct":68},{"id":57,"name":"Free Maternal Care Programme - Isiala Ngwa North","budget":365000000,"spend":142350000,"utilisation":39,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Education","lga":"Isiala Ngwa North","priority":"Priority","progress":26,"status":"In progress","sdg":"SDG 3","directPeople":2241,"indirectPeople":7830,"totalImpacted":10071,"jobsCreated":62,"womenPct":51,"youthPct":52},{"id":58,"name":"Water Reticulation Project - Osisioma","budget":3907000000,"spend":1836290000,"utilisation":47,"year":2026,"cluster":"Infrastructure","mda":"Ministry of Power","lga":"Osisioma","priority":"Priority","progress":51,"status":"In progress","sdg":"SDG 7","directPeople":14601,"indirectPeople":57744,"totalImpacted":72345,"jobsCreated":186,"womenPct":39,"youthPct":46},{"id":59,"name":"E-Procurement Platform - Isiala Ngwa South","budget":1187000000,"spend":106830000,"utilisation":9,"year":2025,"cluster":"Governance","mda":"Bureau of Public Procurement","lga":"Isiala Ngwa South","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 10","directPeople":4840,"indirectPeople":13412,"totalImpacted":18252,"jobsCreated":239,"womenPct":55,"youthPct":40},{"id":60,"name":"Aba Industrial Park Phase - Aba North","budget":476000000,"spend":266560000,"utilisation":56,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Ministry of SMEs","lga":"Aba North","priority":"Non-priority","progress":88,"status":"In progress","sdg":"SDG 8","directPeople":5791,"indirectPeople":21111,"totalImpacted":26902,"jobsCreated":880,"womenPct":34,"youthPct":63},{"id":61,"name":"Tax Reform Implementation - Aba North","budget":340000000,"spend":136000000,"utilisation":40,"year":2026,"cluster":"Governance","mda":"Ministry of Justice","lga":"Aba North","priority":"Non-priority","progress":63,"status":"In progress","sdg":"SDG 10","directPeople":7163,"indirectPeople":25009,"totalImpacted":32172,"jobsCreated":380,"womenPct":47,"youthPct":50},{"id":62,"name":"Community Sports Complex - Ugwunagbo","budget":1010000000,"spend":989800000,"utilisation":98,"year":2026,"cluster":"Social: Services","mda":"Ministry of Youth \u0026 Sports","lga":"Ugwunagbo","priority":"Priority","progress":95,"status":"Completed","sdg":"SDG 15","directPeople":4889,"indirectPeople":14260,"totalImpacted":19149,"jobsCreated":521,"womenPct":39,"youthPct":45},{"id":63,"name":"Drainage \u0026 Erosion Control - Ikwuano","budget":1625000000,"spend":1446250000,"utilisation":89,"year":2026,"cluster":"Infrastructure","mda":"Ministry of Works","lga":"Ikwuano","priority":"Non-priority","progress":100,"status":"Completed","sdg":"SDG 6","directPeople":4888,"indirectPeople":19508,"totalImpacted":24396,"jobsCreated":400,"womenPct":34,"youthPct":42},{"id":64,"name":"Judiciary Case Management System - Umunneochi","budget":251000000,"spend":163150000,"utilisation":65,"year":2026,"cluster":"Governance","mda":"Office of the Governor","lga":"Umunneochi","priority":"Non-priority","progress":50,"status":"In progress","sdg":"SDG 17","directPeople":2958,"indirectPeople":8054,"totalImpacted":11012,"jobsCreated":291,"womenPct":42,"youthPct":56},{"id":65,"name":"Open Budget Portal - Ukwa East","budget":1055000000,"spend":1023350000,"utilisation":97,"year":2026,"cluster":"Governance","mda":"Bureau of Public Procurement","lga":"Ukwa East","priority":"Priority","progress":98,"status":"Completed","sdg":"SDG 16","directPeople":3558,"indirectPeople":5597,"totalImpacted":9155,"jobsCreated":304,"womenPct":27,"youthPct":62},{"id":66,"name":"Water Reticulation Project - Osisioma","budget":1517000000,"spend":1471490000,"utilisation":97,"year":2026,"cluster":"Infrastructure","mda":"Ministry of Works","lga":"Osisioma","priority":"Non-priority","progress":99,"status":"Completed","sdg":"SDG 7","directPeople":8564,"indirectPeople":14577,"totalImpacted":23141,"jobsCreated":170,"womenPct":33,"youthPct":62},{"id":67,"name":"Water Reticulation Project - Ikwuano","budget":2873000000,"spend":287300000,"utilisation":10,"year":2026,"cluster":"Infrastructure","mda":"Ministry of Works","lga":"Ikwuano","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 6","directPeople":11376,"indirectPeople":41363,"totalImpacted":52739,"jobsCreated":224,"womenPct":32,"youthPct":32},{"id":68,"name":"Water Reticulation Project - Ikwuano","budget":1819000000,"spend":763980000,"utilisation":42,"year":2026,"cluster":"Infrastructure","mda":"Ministry of Housing","lga":"Ikwuano","priority":"Non-priority","progress":20,"status":"In progress","sdg":"SDG 6","directPeople":8452,"indirectPeople":26094,"totalImpacted":34546,"jobsCreated":600,"womenPct":52,"youthPct":60},{"id":69,"name":"Waste Management Expansion - Ukwa East","budget":690000000,"spend":607200000,"utilisation":88,"year":2026,"cluster":"Social: Services","mda":"Ministry of Agriculture","lga":"Ukwa East","priority":"Non-priority","progress":97,"status":"Completed","sdg":"SDG 15","directPeople":5966,"indirectPeople":12079,"totalImpacted":18045,"jobsCreated":409,"womenPct":33,"youthPct":61},{"id":70,"name":"Tax Reform Implementation - Arochukwu","budget":430000000,"spend":34400000,"utilisation":8,"year":2025,"cluster":"Governance","mda":"Office of the Governor","lga":"Arochukwu","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 10","directPeople":1959,"indirectPeople":4564,"totalImpacted":6523,"jobsCreated":110,"womenPct":45,"youthPct":66},{"id":71,"name":"Free Maternal Care Programme - Ukwa West","budget":1206000000,"spend":1049220000,"utilisation":87,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"SUBEB","lga":"Ukwa West","priority":"Non-priority","progress":100,"status":"Completed","sdg":"SDG 3","directPeople":13761,"indirectPeople":48923,"totalImpacted":62684,"jobsCreated":209,"womenPct":57,"youthPct":68},{"id":72,"name":"Scholarship Disbursement - Bende","budget":440000000,"spend":400400000,"utilisation":91,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Health","lga":"Bende","priority":"Non-priority","progress":98,"status":"Completed","sdg":"SDG 4","directPeople":3648,"indirectPeople":11214,"totalImpacted":14862,"jobsCreated":526,"womenPct":32,"youthPct":33},{"id":73,"name":"Leather Cluster Modernisation - Ikwuano","budget":733000000,"spend":285870000,"utilisation":39,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Ministry of Trade \u0026 Investment","lga":"Ikwuano","priority":"Non-priority","progress":32,"status":"In progress","sdg":"SDG 9","directPeople":5569,"indirectPeople":14934,"totalImpacted":20503,"jobsCreated":529,"womenPct":59,"youthPct":51},{"id":74,"name":"Trade Fair Pavilion Upgrade - Obingwa","budget":1762000000,"spend":634320000,"utilisation":36,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Obingwa","priority":"Priority","progress":32,"status":"In progress","sdg":"SDG 8","directPeople":5927,"indirectPeople":14869,"totalImpacted":20796,"jobsCreated":378,"womenPct":43,"youthPct":48},{"id":75,"name":"Aba Industrial Park Phase - Umuahia South","budget":894000000,"spend":80460000,"utilisation":9,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Ministry of SMEs","lga":"Umuahia South","priority":"Priority","progress":0,"status":"Not started","sdg":"SDG 9","directPeople":7671,"indirectPeople":19495,"totalImpacted":27166,"jobsCreated":691,"womenPct":33,"youthPct":67},{"id":76,"name":"Trade Fair Pavilion Upgrade - Ukwa West","budget":1113000000,"spend":979440000,"utilisation":88,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Ukwa West","priority":"Non-priority","progress":97,"status":"Completed","sdg":"SDG 9","directPeople":3096,"indirectPeople":8209,"totalImpacted":11305,"jobsCreated":162,"womenPct":42,"youthPct":43},{"id":77,"name":"Tax Reform Implementation - Isiala Ngwa North","budget":998000000,"spend":259480000,"utilisation":26,"year":2025,"cluster":"Governance","mda":"Ministry of Justice","lga":"Isiala Ngwa North","priority":"Non-priority","progress":49,"status":"In progress","sdg":"SDG 16","directPeople":4590,"indirectPeople":8336,"totalImpacted":12926,"jobsCreated":119,"womenPct":54,"youthPct":39},{"id":78,"name":"Drainage \u0026 Erosion Control - Ukwa East","budget":2434000000,"spend":2409660000,"utilisation":99,"year":2026,"cluster":"Infrastructure","mda":"Ministry of Power","lga":"Ukwa East","priority":"Non-priority","progress":99,"status":"Completed","sdg":"SDG 7","directPeople":14968,"indirectPeople":51241,"totalImpacted":66209,"jobsCreated":483,"womenPct":47,"youthPct":37},{"id":79,"name":"Aba Industrial Park Phase - Umunneochi","budget":1168000000,"spend":35040000,"utilisation":3,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Ministry of Trade \u0026 Investment","lga":"Umunneochi","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 12","directPeople":3446,"indirectPeople":13738,"totalImpacted":17184,"jobsCreated":949,"womenPct":51,"youthPct":30},{"id":80,"name":"Rural Bridge Construction - Bende","budget":4309000000,"spend":258540000,"utilisation":6,"year":2025,"cluster":"Infrastructure","mda":"Abia Roads Agency","lga":"Bende","priority":"Priority","progress":0,"status":"Not started","sdg":"SDG 11","directPeople":1914,"indirectPeople":7340,"totalImpacted":9254,"jobsCreated":209,"womenPct":46,"youthPct":43},{"id":81,"name":"Township Road Rehabilitation - Umuahia South","budget":2871000000,"spend":2670030000,"utilisation":93,"year":2026,"cluster":"Infrastructure","mda":"Abia Roads Agency","lga":"Umuahia South","priority":"Priority","progress":99,"status":"Completed","sdg":"SDG 9","directPeople":14688,"indirectPeople":56117,"totalImpacted":70805,"jobsCreated":384,"womenPct":51,"youthPct":41},{"id":82,"name":"SME Capital Grant Scheme - Aba North","budget":660000000,"spend":178200000,"utilisation":27,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Ministry of Trade \u0026 Investment","lga":"Aba North","priority":"Priority","progress":49,"status":"In progress","sdg":"SDG 8","directPeople":8949,"indirectPeople":34965,"totalImpacted":43914,"jobsCreated":527,"womenPct":42,"youthPct":45},{"id":83,"name":"SME Capital Grant Scheme - Ohafia","budget":505000000,"spend":247450000,"utilisation":49,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Ohafia","priority":"Priority","progress":69,"status":"In progress","sdg":"SDG 8","directPeople":2757,"indirectPeople":6928,"totalImpacted":9685,"jobsCreated":819,"womenPct":29,"youthPct":37},{"id":84,"name":"Drainage \u0026 Erosion Control - Isiala Ngwa South","budget":4997000000,"spend":2548470000,"utilisation":51,"year":2025,"cluster":"Infrastructure","mda":"Abia Roads Agency","lga":"Isiala Ngwa South","priority":"Priority","progress":46,"status":"In progress","sdg":"SDG 7","directPeople":2994,"indirectPeople":10456,"totalImpacted":13450,"jobsCreated":406,"womenPct":31,"youthPct":67},{"id":85,"name":"Youth Tech Fellowship - Isuikwuato","budget":813000000,"spend":32520000,"utilisation":4,"year":2025,"cluster":"Social: Services","mda":"Ministry of Environment","lga":"Isuikwuato","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 1","directPeople":7529,"indirectPeople":14649,"totalImpacted":22178,"jobsCreated":545,"womenPct":38,"youthPct":46},{"id":86,"name":"Digital Civil Service Rollout - Obingwa","budget":224000000,"spend":208320000,"utilisation":93,"year":2026,"cluster":"Governance","mda":"Ministry of Justice","lga":"Obingwa","priority":"Non-priority","progress":99,"status":"Completed","sdg":"SDG 17","directPeople":429,"indirectPeople":1463,"totalImpacted":1892,"jobsCreated":451,"womenPct":51,"youthPct":49},{"id":87,"name":"Teacher Training Programme - Ukwa West","budget":2431000000,"spend":826540000,"utilisation":34,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"Primary Healthcare Agency","lga":"Ukwa West","priority":"Non-priority","progress":57,"status":"In progress","sdg":"SDG 4","directPeople":11157,"indirectPeople":21133,"totalImpacted":32290,"jobsCreated":532,"womenPct":58,"youthPct":53},{"id":88,"name":"Women Empowerment Grant - Arochukwu","budget":669000000,"spend":669000000,"utilisation":100,"year":2026,"cluster":"Social: Services","mda":"Ministry of Youth \u0026 Sports","lga":"Arochukwu","priority":"Non-priority","progress":100,"status":"Completed","sdg":"SDG 5","directPeople":4364,"indirectPeople":9846,"totalImpacted":14210,"jobsCreated":285,"womenPct":41,"youthPct":40},{"id":89,"name":"Digital Civil Service Rollout - Aba South","budget":243000000,"spend":9720000,"utilisation":4,"year":2026,"cluster":"Governance","mda":"Ministry of Justice","lga":"Aba South","priority":"Priority","progress":0,"status":"Not started","sdg":"SDG 17","directPeople":6582,"indirectPeople":20752,"totalImpacted":27334,"jobsCreated":564,"womenPct":39,"youthPct":60},{"id":90,"name":"Public Housing Estate - Aba North","budget":4002000000,"spend":1720860000,"utilisation":43,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Power","lga":"Aba North","priority":"Priority","progress":35,"status":"In progress","sdg":"SDG 7","directPeople":13986,"indirectPeople":47183,"totalImpacted":61169,"jobsCreated":119,"womenPct":58,"youthPct":67},{"id":91,"name":"Export Readiness Programme - Ukwa West","budget":1728000000,"spend":743040000,"utilisation":43,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Ministry of SMEs","lga":"Ukwa West","priority":"Priority","progress":29,"status":"In progress","sdg":"SDG 8","directPeople":4059,"indirectPeople":8214,"totalImpacted":12273,"jobsCreated":301,"womenPct":60,"youthPct":34},{"id":92,"name":"Open Budget Portal - Bende","budget":419000000,"spend":364530000,"utilisation":87,"year":2025,"cluster":"Governance","mda":"Office of the Governor","lga":"Bende","priority":"Priority","progress":30,"status":"In progress","sdg":"SDG 10","directPeople":6459,"indirectPeople":20942,"totalImpacted":27401,"jobsCreated":87,"womenPct":56,"youthPct":50},{"id":93,"name":"Artisan Skills Hub - Umuahia North","budget":1310000000,"spend":419200000,"utilisation":32,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Umuahia North","priority":"Priority","progress":71,"status":"In progress","sdg":"SDG 8","directPeople":3972,"indirectPeople":7128,"totalImpacted":11100,"jobsCreated":905,"womenPct":36,"youthPct":42},{"id":94,"name":"Scholarship Disbursement - Isiala Ngwa North","budget":1866000000,"spend":1716720000,"utilisation":92,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Education","lga":"Isiala Ngwa North","priority":"Non-priority","progress":96,"status":"Completed","sdg":"SDG 4","directPeople":16803,"indirectPeople":29078,"totalImpacted":45881,"jobsCreated":527,"womenPct":46,"youthPct":61},{"id":95,"name":"Township Road Rehabilitation - Ugwunagbo","budget":4948000000,"spend":247400000,"utilisation":5,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Housing","lga":"Ugwunagbo","priority":"Priority","progress":0,"status":"Not started","sdg":"SDG 6","directPeople":672,"indirectPeople":2514,"totalImpacted":3186,"jobsCreated":516,"womenPct":32,"youthPct":33},{"id":96,"name":"Youth Tech Fellowship - Arochukwu","budget":1106000000,"spend":0,"utilisation":0,"year":2026,"cluster":"Social: Services","mda":"Ministry of Youth \u0026 Sports","lga":"Arochukwu","priority":"Priority","progress":0,"status":"Not started","sdg":"SDG 1","directPeople":10607,"indirectPeople":25183,"totalImpacted":35790,"jobsCreated":187,"womenPct":51,"youthPct":67},{"id":97,"name":"Rural Bridge Construction - Arochukwu","budget":4209000000,"spend":210450000,"utilisation":5,"year":2026,"cluster":"Infrastructure","mda":"Abia Roads Agency","lga":"Arochukwu","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 6","directPeople":9084,"indirectPeople":20271,"totalImpacted":29355,"jobsCreated":66,"womenPct":54,"youthPct":69},{"id":98,"name":"Trade Fair Pavilion Upgrade - Osisioma","budget":778000000,"spend":210060000,"utilisation":27,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Osisioma","priority":"Non-priority","progress":27,"status":"In progress","sdg":"SDG 8","directPeople":863,"indirectPeople":2274,"totalImpacted":3137,"jobsCreated":169,"womenPct":37,"youthPct":62},{"id":99,"name":"Export Readiness Programme - Aba North","budget":584000000,"spend":543120000,"utilisation":93,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Ministry of SMEs","lga":"Aba North","priority":"Non-priority","progress":96,"status":"Completed","sdg":"SDG 8","directPeople":4487,"indirectPeople":17808,"totalImpacted":22295,"jobsCreated":731,"womenPct":49,"youthPct":45},{"id":100,"name":"Primary Health Centre Upgrade - Aba South","budget":2323000000,"spend":557520000,"utilisation":24,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Education","lga":"Aba South","priority":"Non-priority","progress":32,"status":"In progress","sdg":"SDG 3","directPeople":13509,"indirectPeople":42839,"totalImpacted":56348,"jobsCreated":297,"womenPct":53,"youthPct":33},{"id":101,"name":"Community Sports Complex - Arochukwu","budget":775000000,"spend":317750000,"utilisation":41,"year":2026,"cluster":"Social: Services","mda":"Ministry of Youth \u0026 Sports","lga":"Arochukwu","priority":"Non-priority","progress":17,"status":"In progress","sdg":"SDG 13","directPeople":6530,"indirectPeople":13744,"totalImpacted":20274,"jobsCreated":411,"womenPct":50,"youthPct":57},{"id":102,"name":"Artisan Skills Hub - Obingwa","budget":1127000000,"spend":1070650000,"utilisation":95,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Obingwa","priority":"Non-priority","progress":96,"status":"Completed","sdg":"SDG 8","directPeople":7216,"indirectPeople":15677,"totalImpacted":22893,"jobsCreated":610,"womenPct":36,"youthPct":55},{"id":103,"name":"Export Readiness Programme - Ohafia","budget":453000000,"spend":416760000,"utilisation":92,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Ministry of Trade \u0026 Investment","lga":"Ohafia","priority":"Priority","progress":99,"status":"Completed","sdg":"SDG 8","directPeople":4035,"indirectPeople":6623,"totalImpacted":10658,"jobsCreated":657,"womenPct":48,"youthPct":59},{"id":104,"name":"Leather Cluster Modernisation - Ukwa East","budget":784000000,"spend":188160000,"utilisation":24,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Ministry of SMEs","lga":"Ukwa East","priority":"Non-priority","progress":39,"status":"In progress","sdg":"SDG 8","directPeople":3972,"indirectPeople":10034,"totalImpacted":14006,"jobsCreated":787,"womenPct":42,"youthPct":69},{"id":105,"name":"Hospital Equipment Supply - Ohafia","budget":2288000000,"spend":2288000000,"utilisation":100,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"SUBEB","lga":"Ohafia","priority":"Non-priority","progress":97,"status":"Completed","sdg":"SDG 3","directPeople":10860,"indirectPeople":31125,"totalImpacted":41985,"jobsCreated":278,"womenPct":35,"youthPct":50},{"id":106,"name":"Open Budget Portal - Ikwuano","budget":871000000,"spend":574860000,"utilisation":66,"year":2025,"cluster":"Governance","mda":"Ministry of Finance","lga":"Ikwuano","priority":"Non-priority","progress":66,"status":"In progress","sdg":"SDG 17","directPeople":7402,"indirectPeople":18805,"totalImpacted":26207,"jobsCreated":133,"womenPct":38,"youthPct":43},{"id":107,"name":"Teacher Training Programme - Obingwa","budget":2283000000,"spend":1872060000,"utilisation":82,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"SUBEB","lga":"Obingwa","priority":"Priority","progress":65,"status":"In progress","sdg":"SDG 3","directPeople":23801,"indirectPeople":76852,"totalImpacted":100653,"jobsCreated":281,"womenPct":39,"youthPct":41},{"id":108,"name":"Community Sports Complex - Isiala Ngwa South","budget":517000000,"spend":258500000,"utilisation":50,"year":2026,"cluster":"Social: Services","mda":"Ministry of Women Affairs","lga":"Isiala Ngwa South","priority":"Priority","progress":23,"status":"In progress","sdg":"SDG 13","directPeople":4098,"indirectPeople":15726,"totalImpacted":19824,"jobsCreated":596,"womenPct":34,"youthPct":63},{"id":109,"name":"Aba Industrial Park Phase - Umuahia South","budget":296000000,"spend":296000000,"utilisation":100,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Umuahia South","priority":"Priority","progress":96,"status":"Completed","sdg":"SDG 1","directPeople":10295,"indirectPeople":21882,"totalImpacted":32177,"jobsCreated":68,"womenPct":26,"youthPct":70},{"id":110,"name":"Scholarship Disbursement - Ugwunagbo","budget":704000000,"spend":436480000,"utilisation":62,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"SUBEB","lga":"Ugwunagbo","priority":"Non-priority","progress":20,"status":"In progress","sdg":"SDG 5","directPeople":13542,"indirectPeople":30669,"totalImpacted":44211,"jobsCreated":333,"womenPct":34,"youthPct":46},{"id":111,"name":"Trade Fair Pavilion Upgrade - Ukwa East","budget":1088000000,"spend":380800000,"utilisation":35,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Ukwa East","priority":"Non-priority","progress":22,"status":"In progress","sdg":"SDG 12","directPeople":1166,"indirectPeople":2673,"totalImpacted":3839,"jobsCreated":203,"womenPct":33,"youthPct":34},{"id":112,"name":"Skills Acquisition Centre - Umuahia North","budget":181000000,"spend":18100000,"utilisation":10,"year":2026,"cluster":"Social: Services","mda":"Ministry of Youth \u0026 Sports","lga":"Umuahia North","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 15","directPeople":6802,"indirectPeople":13521,"totalImpacted":20323,"jobsCreated":298,"womenPct":37,"youthPct":50},{"id":113,"name":"Primary Health Centre Upgrade - Ikwuano","budget":427000000,"spend":367220000,"utilisation":86,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"Primary Healthcare Agency","lga":"Ikwuano","priority":"Priority","progress":97,"status":"Completed","sdg":"SDG 4","directPeople":35091,"indirectPeople":81409,"totalImpacted":116500,"jobsCreated":152,"womenPct":45,"youthPct":32},{"id":114,"name":"Hospital Equipment Supply - Arochukwu","budget":1084000000,"spend":325200000,"utilisation":30,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Health","lga":"Arochukwu","priority":"Non-priority","progress":52,"status":"In progress","sdg":"SDG 4","directPeople":19848,"indirectPeople":41164,"totalImpacted":61012,"jobsCreated":71,"womenPct":29,"youthPct":42},{"id":115,"name":"Open Budget Portal - Umuahia South","budget":1097000000,"spend":362010000,"utilisation":33,"year":2025,"cluster":"Governance","mda":"Bureau of Public Procurement","lga":"Umuahia South","priority":"Priority","progress":28,"status":"In progress","sdg":"SDG 17","directPeople":2688,"indirectPeople":9098,"totalImpacted":11786,"jobsCreated":188,"womenPct":60,"youthPct":37},{"id":116,"name":"Township Road Rehabilitation - Umuahia North","budget":3509000000,"spend":3333550000,"utilisation":95,"year":2026,"cluster":"Infrastructure","mda":"Abia Roads Agency","lga":"Umuahia North","priority":"Priority","progress":67,"status":"In progress","sdg":"SDG 7","directPeople":21762,"indirectPeople":81828,"totalImpacted":103590,"jobsCreated":143,"womenPct":59,"youthPct":44},{"id":117,"name":"Judiciary Case Management System - Aba South","budget":566000000,"spend":532040000,"utilisation":94,"year":2026,"cluster":"Governance","mda":"Office of the Governor","lga":"Aba South","priority":"Non-priority","progress":100,"status":"Completed","sdg":"SDG 16","directPeople":1633,"indirectPeople":5813,"totalImpacted":7446,"jobsCreated":529,"womenPct":42,"youthPct":52},{"id":118,"name":"Drainage \u0026 Erosion Control - Arochukwu","budget":895000000,"spend":259550000,"utilisation":29,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Works","lga":"Arochukwu","priority":"Priority","progress":38,"status":"In progress","sdg":"SDG 6","directPeople":22371,"indirectPeople":41213,"totalImpacted":63584,"jobsCreated":149,"womenPct":30,"youthPct":41},{"id":119,"name":"Free Maternal Care Programme - Umuahia North","budget":1666000000,"spend":1416100000,"utilisation":85,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Health","lga":"Umuahia North","priority":"Non-priority","progress":98,"status":"Completed","sdg":"SDG 4","directPeople":6351,"indirectPeople":15916,"totalImpacted":22267,"jobsCreated":452,"womenPct":59,"youthPct":32},{"id":120,"name":"Primary Health Centre Upgrade - Aba South","budget":1849000000,"spend":1719570000,"utilisation":93,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Health","lga":"Aba South","priority":"Priority","progress":51,"status":"In progress","sdg":"SDG 4","directPeople":35109,"indirectPeople":119155,"totalImpacted":154264,"jobsCreated":339,"womenPct":32,"youthPct":65},{"id":121,"name":"Waste Management Expansion - Umuahia North","budget":1188000000,"spend":59400000,"utilisation":5,"year":2026,"cluster":"Social: Services","mda":"Ministry of Youth \u0026 Sports","lga":"Umuahia North","priority":"Priority","progress":0,"status":"Not started","sdg":"SDG 1","directPeople":6593,"indirectPeople":21973,"totalImpacted":28566,"jobsCreated":13,"womenPct":28,"youthPct":31},{"id":122,"name":"Export Readiness Programme - Obingwa","budget":222000000,"spend":179820000,"utilisation":81,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Obingwa","priority":"Priority","progress":37,"status":"In progress","sdg":"SDG 8","directPeople":5882,"indirectPeople":9140,"totalImpacted":15022,"jobsCreated":688,"womenPct":42,"youthPct":41},{"id":123,"name":"Export Readiness Programme - Obingwa","budget":214000000,"spend":192600000,"utilisation":90,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Obingwa","priority":"Non-priority","progress":19,"status":"In progress","sdg":"SDG 9","directPeople":2531,"indirectPeople":4767,"totalImpacted":7298,"jobsCreated":828,"womenPct":44,"youthPct":43},{"id":124,"name":"Farm Input Subsidy - Osisioma","budget":246000000,"spend":61500000,"utilisation":25,"year":2026,"cluster":"Social: Services","mda":"Ministry of Agriculture","lga":"Osisioma","priority":"Non-priority","progress":38,"status":"In progress","sdg":"SDG 13","directPeople":5503,"indirectPeople":21559,"totalImpacted":27062,"jobsCreated":11,"womenPct":33,"youthPct":61},{"id":125,"name":"Leather Cluster Modernisation - Ukwa West","budget":1773000000,"spend":1542510000,"utilisation":87,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Ukwa West","priority":"Priority","progress":96,"status":"Completed","sdg":"SDG 1","directPeople":7452,"indirectPeople":11926,"totalImpacted":19378,"jobsCreated":958,"womenPct":44,"youthPct":50},{"id":126,"name":"Tax Reform Implementation - Ohafia","budget":510000000,"spend":489600000,"utilisation":96,"year":2026,"cluster":"Governance","mda":"Bureau of Public Procurement","lga":"Ohafia","priority":"Non-priority","progress":97,"status":"Completed","sdg":"SDG 17","directPeople":4472,"indirectPeople":17584,"totalImpacted":22056,"jobsCreated":507,"womenPct":44,"youthPct":66},{"id":127,"name":"Scholarship Disbursement - Aba South","budget":1324000000,"spend":52960000,"utilisation":4,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"SUBEB","lga":"Aba South","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 4","directPeople":5016,"indirectPeople":12988,"totalImpacted":18004,"jobsCreated":123,"womenPct":59,"youthPct":32},{"id":128,"name":"Free Maternal Care Programme - Umuahia North","budget":429000000,"spend":98670000,"utilisation":23,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"Primary Healthcare Agency","lga":"Umuahia North","priority":"Non-priority","progress":33,"status":"In progress","sdg":"SDG 3","directPeople":20640,"indirectPeople":62465,"totalImpacted":83105,"jobsCreated":228,"womenPct":42,"youthPct":36},{"id":129,"name":"Aba Industrial Park Phase - Arochukwu","budget":444000000,"spend":377400000,"utilisation":85,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Ministry of SMEs","lga":"Arochukwu","priority":"Priority","progress":17,"status":"In progress","sdg":"SDG 8","directPeople":4775,"indirectPeople":17537,"totalImpacted":22312,"jobsCreated":113,"womenPct":26,"youthPct":52},{"id":130,"name":"Township Road Rehabilitation - Bende","budget":2822000000,"spend":2398700000,"utilisation":85,"year":2026,"cluster":"Infrastructure","mda":"Abia Roads Agency","lga":"Bende","priority":"Non-priority","progress":100,"status":"Completed","sdg":"SDG 9","directPeople":4736,"indirectPeople":14183,"totalImpacted":18919,"jobsCreated":326,"womenPct":53,"youthPct":69},{"id":131,"name":"Judiciary Case Management System - Aba North","budget":742000000,"spend":44520000,"utilisation":6,"year":2026,"cluster":"Governance","mda":"Bureau of Public Procurement","lga":"Aba North","priority":"Priority","progress":0,"status":"Not started","sdg":"SDG 10","directPeople":2348,"indirectPeople":8314,"totalImpacted":10662,"jobsCreated":349,"womenPct":27,"youthPct":36},{"id":132,"name":"Open Budget Portal - Isiala Ngwa South","budget":220000000,"spend":118800000,"utilisation":54,"year":2025,"cluster":"Governance","mda":"Office of the Governor","lga":"Isiala Ngwa South","priority":"Non-priority","progress":80,"status":"In progress","sdg":"SDG 16","directPeople":6042,"indirectPeople":20799,"totalImpacted":26841,"jobsCreated":536,"womenPct":41,"youthPct":55},{"id":133,"name":"Trade Fair Pavilion Upgrade - Bende","budget":1160000000,"spend":81200000,"utilisation":7,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Ministry of SMEs","lga":"Bende","priority":"Non-priority","progress":0,"status":"Not started","sdg":"SDG 9","directPeople":253,"indirectPeople":969,"totalImpacted":1222,"jobsCreated":940,"womenPct":45,"youthPct":63},{"id":134,"name":"Water Reticulation Project - Ohafia","budget":4540000000,"spend":1135000000,"utilisation":25,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Housing","lga":"Ohafia","priority":"Non-priority","progress":88,"status":"In progress","sdg":"SDG 11","directPeople":8066,"indirectPeople":16012,"totalImpacted":24078,"jobsCreated":484,"womenPct":53,"youthPct":42},{"id":135,"name":"Skills Acquisition Centre - Osisioma","budget":786000000,"spend":275100000,"utilisation":35,"year":2025,"cluster":"Social: Services","mda":"Ministry of Youth \u0026 Sports","lga":"Osisioma","priority":"Non-priority","progress":65,"status":"In progress","sdg":"SDG 15","directPeople":5260,"indirectPeople":16907,"totalImpacted":22167,"jobsCreated":549,"womenPct":28,"youthPct":42},{"id":136,"name":"School Renovation Initiative - Isiala Ngwa South","budget":2477000000,"spend":668790000,"utilisation":27,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"Primary Healthcare Agency","lga":"Isiala Ngwa South","priority":"Non-priority","progress":23,"status":"In progress","sdg":"SDG 3","directPeople":16917,"indirectPeople":63991,"totalImpacted":80908,"jobsCreated":324,"womenPct":37,"youthPct":53},{"id":137,"name":"Export Readiness Programme - Umuahia North","budget":404000000,"spend":206040000,"utilisation":51,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Umuahia North","priority":"Non-priority","progress":76,"status":"In progress","sdg":"SDG 1","directPeople":1039,"indirectPeople":3699,"totalImpacted":4738,"jobsCreated":409,"womenPct":42,"youthPct":40},{"id":138,"name":"Primary Health Centre Upgrade - Aba South","budget":2065000000,"spend":1486800000,"utilisation":72,"year":2026,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Health","lga":"Aba South","priority":"Non-priority","progress":64,"status":"In progress","sdg":"SDG 4","directPeople":8100,"indirectPeople":17279,"totalImpacted":25379,"jobsCreated":203,"womenPct":31,"youthPct":63},{"id":139,"name":"Township Road Rehabilitation - Ugwunagbo","budget":2485000000,"spend":2261350000,"utilisation":91,"year":2025,"cluster":"Infrastructure","mda":"Ministry of Works","lga":"Ugwunagbo","priority":"Priority","progress":95,"status":"Completed","sdg":"SDG 11","directPeople":19128,"indirectPeople":32725,"totalImpacted":51853,"jobsCreated":569,"womenPct":56,"youthPct":53},{"id":140,"name":"Aba Industrial Park Phase - Ikwuano","budget":1154000000,"spend":957820000,"utilisation":83,"year":2026,"cluster":"Commerce \u0026 Industry","mda":"Ministry of Trade \u0026 Investment","lga":"Ikwuano","priority":"Non-priority","progress":58,"status":"In progress","sdg":"SDG 12","directPeople":3089,"indirectPeople":9995,"totalImpacted":13084,"jobsCreated":349,"womenPct":60,"youthPct":57},{"id":141,"name":"Skills Acquisition Centre - Ugwunagbo","budget":113000000,"spend":105090000,"utilisation":93,"year":2025,"cluster":"Social: Services","mda":"Ministry of Environment","lga":"Ugwunagbo","priority":"Priority","progress":26,"status":"In progress","sdg":"SDG 13","directPeople":8400,"indirectPeople":21458,"totalImpacted":29858,"jobsCreated":185,"womenPct":49,"youthPct":65},{"id":142,"name":"Drainage \u0026 Erosion Control - Arochukwu","budget":3952000000,"spend":3082560000,"utilisation":78,"year":2025,"cluster":"Infrastructure","mda":"Abia Roads Agency","lga":"Arochukwu","priority":"Priority","progress":22,"status":"In progress","sdg":"SDG 7","directPeople":20454,"indirectPeople":63558,"totalImpacted":84012,"jobsCreated":547,"womenPct":29,"youthPct":36},{"id":143,"name":"E-Procurement Platform - Arochukwu","budget":875000000,"spend":857500000,"utilisation":98,"year":2025,"cluster":"Governance","mda":"Bureau of Public Procurement","lga":"Arochukwu","priority":"Priority","progress":95,"status":"Completed","sdg":"SDG 10","directPeople":6603,"indirectPeople":13433,"totalImpacted":20036,"jobsCreated":31,"womenPct":28,"youthPct":64},{"id":144,"name":"Free Maternal Care Programme - Isuikwuato","budget":1466000000,"spend":1290080000,"utilisation":88,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Education","lga":"Isuikwuato","priority":"Priority","progress":95,"status":"Completed","sdg":"SDG 4","directPeople":11246,"indirectPeople":22076,"totalImpacted":33322,"jobsCreated":239,"womenPct":52,"youthPct":37},{"id":145,"name":"Open Budget Portal - Isiala Ngwa North","budget":601000000,"spend":564940000,"utilisation":94,"year":2026,"cluster":"Governance","mda":"Ministry of Justice","lga":"Isiala Ngwa North","priority":"Priority","progress":96,"status":"Completed","sdg":"SDG 10","directPeople":5240,"indirectPeople":18639,"totalImpacted":23879,"jobsCreated":358,"womenPct":56,"youthPct":32},{"id":146,"name":"Citizens Feedback Hotline - Umuahia South","budget":516000000,"spend":15480000,"utilisation":3,"year":2026,"cluster":"Governance","mda":"Ministry of Finance","lga":"Umuahia South","priority":"Priority","progress":0,"status":"Not started","sdg":"SDG 10","directPeople":2436,"indirectPeople":7960,"totalImpacted":10396,"jobsCreated":320,"womenPct":27,"youthPct":42},{"id":147,"name":"Waste Management Expansion - Bende","budget":628000000,"spend":502400000,"utilisation":80,"year":2026,"cluster":"Social: Services","mda":"Ministry of Agriculture","lga":"Bende","priority":"Non-priority","progress":78,"status":"In progress","sdg":"SDG 1","directPeople":6494,"indirectPeople":11122,"totalImpacted":17616,"jobsCreated":38,"womenPct":51,"youthPct":60},{"id":148,"name":"Community Sports Complex - Arochukwu","budget":178000000,"spend":44500000,"utilisation":25,"year":2025,"cluster":"Social: Services","mda":"Ministry of Environment","lga":"Arochukwu","priority":"Non-priority","progress":51,"status":"In progress","sdg":"SDG 1","directPeople":608,"indirectPeople":2003,"totalImpacted":2611,"jobsCreated":248,"womenPct":48,"youthPct":32},{"id":149,"name":"Hospital Equipment Supply - Ohafia","budget":1534000000,"spend":1380600000,"utilisation":90,"year":2025,"cluster":"Social: Health \u0026 Edu","mda":"Ministry of Education","lga":"Ohafia","priority":"Non-priority","progress":99,"status":"Completed","sdg":"SDG 3","directPeople":10788,"indirectPeople":38191,"totalImpacted":48979,"jobsCreated":35,"womenPct":38,"youthPct":56},{"id":150,"name":"SME Capital Grant Scheme - Umuahia South","budget":568000000,"spend":397600000,"utilisation":70,"year":2025,"cluster":"Commerce \u0026 Industry","mda":"Abia Investment Promotion Agency","lga":"Umuahia South","priority":"Priority","progress":19,"status":"In progress","sdg":"SDG 1","directPeople":3192,"indirectPeople":10410,"totalImpacted":13602,"jobsCreated":495,"womenPct":43,"youthPct":37}];

const SECTOR_MAP = {
  "Infrastructure": "Infrastructure",
  "Commerce & Industry": "Agriculture",
  "Governance": "Digital Economy",
  "Social: Health & Edu": "Health",
  "Social: Services": "Social Development"
};

const STATUS_OPTIONS = ["All", "Completed", "In Progress", "At Risk", "Not Started"];
const SECTOR_OPTIONS = ["All", "Infrastructure", "Health", "Education", "Agriculture", "Digital Economy", "Security", "Environment", "Social Development"];
const FUNDING_OPTIONS = ["All", "State Government", "Federal Support", "Donor/Partner", "PPP"];
const QUARTER_OPTIONS = ["All", "Q1", "Q2", "Q3", "Q4"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const CONTRACTORS = ["Greenfield Works Ltd", "Aba Build Partners", "Eastern Axis Engineering", "CivicGrid Solutions", "Umuahia Infrastructure Co.", "PrimeCare Services", "Golden Palm Projects"];
const MDA_DETAILS = {
  "Ministry of Works": ["Deliver durable road, bridge, and transport infrastructure.", "Connect communities through resilient capital works.", "Reliable mobility corridors across Abia."],
  "Ministry of Power": ["Expand energy access and public lighting infrastructure.", "Improve safety, productivity, and energy resilience.", "A brighter and more productive Abia."],
  "Ministry of Housing": ["Provide housing, water, and settlement infrastructure.", "Improve liveability through planned development.", "Inclusive and well-serviced communities."],
  "Abia Roads Agency": ["Execute priority road rehabilitation and maintenance.", "Reduce travel time and protect public assets.", "Safe, connected, economically active roads."],
  "Ministry of Health": ["Strengthen healthcare access and service readiness.", "Improve maternal, primary, and emergency care.", "Quality healthcare close to every community."],
  "Primary Healthcare Agency": ["Coordinate primary healthcare upgrades and delivery.", "Improve frontline facility readiness.", "Accessible primary care for all residents."],
  "Ministry of Education": ["Improve learning infrastructure and human capital.", "Upgrade schools, teachers, and learner support.", "Modern education for Abia's next generation."],
  "SUBEB": ["Support basic education infrastructure and quality.", "Renovate schools and strengthen foundational learning.", "Every child learning in a safe environment."],
  "Ministry of SMEs": ["Grow MSMEs, artisans, and enterprise clusters.", "Increase jobs, exports, and business productivity.", "A competitive enterprise economy."],
  "Ministry of Trade & Investment": ["Attract investment and support industrial growth.", "Deepen trade readiness and private capital.", "Abia as a preferred investment destination."],
  "Abia Investment Promotion Agency": ["Promote investment, PPPs, and enterprise acceleration.", "Mobilize private participation in priority sectors.", "Bankable opportunities that create jobs."],
  "Ministry of Finance": ["Strengthen fiscal systems and transparent delivery.", "Improve budget execution and reporting.", "Disciplined public finance for results."],
  "Bureau of Public Procurement": ["Improve procurement transparency and value for money.", "Digitize purchasing and contract governance.", "Fair, efficient, auditable procurement."],
  "Ministry of Justice": ["Modernize justice systems and institutional performance.", "Improve case management and civic trust.", "Accessible justice and strong institutions."],
  "Office of the Governor": ["Coordinate executive priority delivery and governance.", "Track cross-sector results and citizen feedback.", "Responsive, accountable governance."],
  "Ministry of Environment": ["Protect communities through environmental services.", "Improve waste, erosion, and climate resilience.", "Clean and climate-aware communities."],
  "Ministry of Agriculture": ["Support food systems and rural productivity.", "Improve inputs, processing, and farmer outcomes.", "A productive agricultural economy."],
  "Ministry of Women Affairs": ["Advance inclusion, welfare, and social protection.", "Improve women-focused access to services and grants.", "Inclusive prosperity for households."],
  "Ministry of Youth & Sports": ["Develop youth skills, sports, and empowerment pathways.", "Increase employability and civic participation.", "Productive, skilled, confident young people."]
};

const projects = rawProjects.map((project) => {
  const sector = deriveSector(project);
  const dates = deriveProjectDates(project);
  const status = normalizeStatus(project.status, project.progress, project.utilisation, dates);
  const released = Math.min(project.budget, Math.max(project.spend, Math.round(project.budget * Math.min(1, (project.utilisation + 12) / 100))));
  return {
    ...project,
    sector,
    status,
    funding: deriveFunding(project),
    released,
    startDate: dates.startDate,
    dueDate: dates.dueDate,
    quarter: dates.quarter,
    lastUpdated: deriveDate(project),
    monthIndex: (project.id + project.year) % 12,
    contractor: CONTRACTORS[project.id % CONTRACTORS.length],
    imageLinks: deriveImageLinks(project),
    outputSummary: deriveOutput(project),
    outcomeSummary: deriveOutcome(project),
    milestoneComment: deriveMilestone(project)
  };
});

const state = { sortKey: "progress", sortDirection: "desc" };
const charts = {};

document.addEventListener("DOMContentLoaded", init);

function init() {
  populateFilters();
  attachEvents();
  attachShellEvents();
  renderDashboard();
}

function deriveSector(project) {
  if (project.name.includes("School") || project.name.includes("Scholarship") || project.name.includes("Teacher")) return "Education";
  if (project.name.includes("Hospital") || project.name.includes("Health") || project.name.includes("Maternal")) return "Health";
  if (project.name.includes("Farm")) return "Agriculture";
  if (project.name.includes("Erosion") || project.name.includes("Waste") || project.name.includes("Water")) return "Environment";
  if (project.name.includes("Security") || project.name.includes("Streetlight")) return "Security";
  return SECTOR_MAP[project.cluster] || project.cluster;
}

function normalizeStatus(status, progress, utilisation, dates) {
  if (status === "Completed") return "Completed";
  if (status === "Not started") return "Not Started";
  const expected = expectedProgress(dates.startDate, dates.dueDate);
  if ((expected - progress) > 18 || (progress < 35 && utilisation < 35)) return "At Risk";
  return "In Progress";
}

function deriveProjectDates(project) {
  const startMonth = ((project.id * 2) % 10) + 1;
  const startDay = ((project.id * 5) % 24) + 1;
  const durationMonths = project.cluster === "Infrastructure" ? 8 : project.cluster === "Social: Health & Edu" ? 6 : 5;
  const start = new Date(project.year, startMonth - 1, startDay);
  const due = new Date(start);
  due.setMonth(due.getMonth() + durationMonths);
  const quarter = `Q${Math.floor(start.getMonth() / 3) + 1}`;
  return { startDate: toIsoDate(start), dueDate: toIsoDate(due), quarter };
}

function expectedProgress(startDate, dueDate) {
  const today = new Date("2026-05-29T00:00:00");
  const start = new Date(`${startDate}T00:00:00`);
  const due = new Date(`${dueDate}T00:00:00`);
  if (today <= start) return 0;
  if (today >= due) return 100;
  return ((today - start) / (due - start)) * 100;
}

function deriveImageLinks(project) {
  const slugName = project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return [
    `https://example.com/abia-projects/${slugName}/site-photo-1.jpg`,
    `https://example.com/abia-projects/${slugName}/progress-photo-2.jpg`
  ];
}

function deriveOutput(project) {
  if (project.sector === "Infrastructure") return `${Math.max(1, Math.round(project.budget / 900000000))} road, bridge, housing, water, or public utility work package(s) advanced.`;
  if (project.sector === "Health") return `${Math.max(1, Math.round(project.totalImpacted / 35000))} health service delivery upgrade(s) supported.`;
  if (project.sector === "Education") return `${Math.max(1, Math.round(project.totalImpacted / 30000))} learning facility or human-capital intervention(s) delivered.`;
  if (project.sector === "Agriculture") return `${Math.max(1, Math.round(project.jobsCreated / 220))} enterprise, agriculture, or processing support output(s) produced.`;
  if (project.sector === "Digital Economy") return `${Math.max(1, Math.round(project.budget / 450000000))} governance digitization output(s) deployed.`;
  if (project.sector === "Security") return `${Math.max(1, Math.round(project.budget / 700000000))} public-safety lighting or security infrastructure output(s) installed.`;
  if (project.sector === "Environment") return `${Math.max(1, Math.round(project.budget / 800000000))} environmental resilience output(s) delivered.`;
  return `${Math.max(1, Math.round(project.jobsCreated / 180))} social development output(s) completed or underway.`;
}

function deriveOutcome(project) {
  return `${formatNumber(project.totalImpacted)} people reached, ${formatNumber(project.jobsCreated)} jobs supported, with ${project.womenPct}% women and ${project.youthPct}% youth inclusion.`;
}

function deriveMilestone(project) {
  if (project.status === "Completed") return "Milestone achieved: implementation substantially completed and ready for post-completion monitoring.";
  if (project.status === "At Risk") return "Milestone concern: progress is behind the expected run rate and requires delivery intervention.";
  if (project.status === "Not Started") return "Milestone pending: mobilization and commencement activities have not yet been recorded.";
  return "Milestone active: implementation is progressing with periodic delivery updates expected.";
}

function toIsoDate(date) {
  return date.toISOString().slice(0, 10);
}

function deriveFunding(project) {
  if (project.priority === "Priority" && project.budget > 1500000000) return "Federal Support";
  if (project.mda.includes("Investment") || project.mda.includes("Trade")) return "PPP";
  if (project.mda.includes("Health") || project.mda.includes("Environment")) return "Donor/Partner";
  return "State Government";
}

function deriveDate(project) {
  const month = String(((project.id + 2) % 12) + 1).padStart(2, "0");
  const day = String(((project.id * 3) % 26) + 1).padStart(2, "0");
  return `${project.year}-${month}-${day}`;
}

function populateFilters() {
  setOptions("yearFilter", ["All", ...unique(projects.map((p) => p.year)).sort()]);
  setOptions("quarterFilter", QUARTER_OPTIONS);
  setOptions("sectorFilter", SECTOR_OPTIONS);
  setOptions("lgaFilter", ["All", ...unique(projects.map((p) => p.lga)).sort()]);
  setOptions("statusFilter", STATUS_OPTIONS);
  setOptions("fundingFilter", FUNDING_OPTIONS);
}

function setOptions(id, options) {
  document.getElementById(id).innerHTML = options.map((option) => `<option value="${option}">${option}</option>`).join("");
}

function attachEvents() {
  ["yearFilter", "quarterFilter", "sectorFilter", "lgaFilter", "statusFilter", "fundingFilter", "searchFilter"].forEach((id) => {
    document.getElementById(id).addEventListener("input", renderDashboard);
  });
  document.getElementById("resetFilters").addEventListener("click", resetFilters);
  document.getElementById("exportCsv").addEventListener("click", exportCsv);
  document.querySelectorAll("th[data-sort]").forEach((th) => th.addEventListener("click", () => sortBy(th.dataset.sort)));
  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".portfolio-view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(button.dataset.view === "cards" ? "portfolioCardView" : "portfolioTableView").classList.add("active");
    });
  });
  document.querySelectorAll("[data-page-target]").forEach((button) => {
    button.addEventListener("click", () => activatePage(button.dataset.pageTarget));
  });
}

function attachShellEvents() {
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.addEventListener("click", () => activatePage(button.dataset.page));
  });

  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });

  document.getElementById("themeToggle").addEventListener("click", () => {
    document.documentElement.dataset.theme = document.documentElement.dataset.theme === "dark" ? "" : "dark";
    renderDashboard();
  });

  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("projectModal").addEventListener("click", (event) => {
    if (event.target.id === "projectModal") closeModal();
  });
}

function activatePage(pageName) {
  const target = document.querySelector(`.nav-link[data-page="${pageName}"]`);
  if (!target) return;
  document.querySelectorAll(".nav-link").forEach((item) => item.classList.remove("active"));
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("active"));
  target.classList.add("active");
  document.getElementById(`page-${pageName}`).classList.add("active");
  document.getElementById("sidebar").classList.remove("open");
  renderDashboard();
}

function getFilteredProjects() {
  const year = value("yearFilter");
  const quarter = value("quarterFilter");
  const sector = value("sectorFilter");
  const lga = value("lgaFilter");
  const status = value("statusFilter");
  const funding = value("fundingFilter");
  const query = value("searchFilter").toLowerCase().trim();
  return projects.filter((p) => {
    const text = `${p.name} ${p.sector} ${p.lga} ${p.mda} ${p.sdg} ${p.priority}`.toLowerCase();
    return (year === "All" || String(p.year) === String(year))
      && (quarter === "All" || p.quarter === quarter)
      && (sector === "All" || p.sector === sector)
      && (lga === "All" || p.lga === lga)
      && (status === "All" || p.status === status)
      && (funding === "All" || p.funding === funding)
      && (!query || text.includes(query));
  });
}

function renderDashboard() {
  const filtered = getFilteredProjects();
  renderHero(filtered);
  renderKpis(filtered);
  renderCharts(filtered);
  renderStatusBreakdown(filtered);
  renderOverviewWatchlist(filtered);
  renderProjectCards(filtered);
  renderMdaPortfolio(filtered);
  renderRunRate(filtered);
  renderFinance(filtered);
  renderOutputs(filtered);
  renderOutcomeImpact(filtered);
  renderInsights(filtered);
  renderTable(filtered);
}

function renderHero(data) {
  const totals = summarize(data);
  text("heroProjects", formatNumber(data.length));
  text("heroBudget", compactCurrency(totals.budget));
  text("heroRate", `${round(totals.avgProgress)}%`);
}

function renderKpis(data) {
  const totals = summarize(data);
  const kpis = [
    ["Total Projects", formatNumber(data.length), "Open project portfolio", "P", "portfolio"],
    ["Total Budgets", compactCurrency(totals.budget), "Approved allocation", "B", "financial"],
    ["Total Spend", compactCurrency(totals.spend), "Reported utilization", "S", "financial"],
    ["Total MDAs", formatNumber(unique(data.map((p) => p.mda)).length), "Implementing institutions", "M", "mda"]
  ];
  document.getElementById("kpiGrid").innerHTML = kpis.map(([label, main, note, icon, page]) => `
    <article class="kpi-card" data-page-target="${page}">
      <div class="kpi-top"><span class="kpi-icon">${icon}</span><span class="kpi-note">${note}</span></div>
      <div class="kpi-value">${main}</div>
      <p class="kpi-label">${label}</p>
    </article>
  `).join("");
  document.querySelectorAll("#kpiGrid [data-page-target]").forEach((card) => {
    card.addEventListener("click", () => activatePage(card.dataset.pageTarget));
  });
}

function renderCharts(data) {
  const sectorCounts = aggregateCount(data, "sector");
  const statusCounts = aggregateCount(data, "status");
  const monthly = MONTHS.map((month, index) => average(data.filter((p) => p.monthIndex === index), "progress"));
  const sectorUtilization = aggregateBy(data, "sector", (items) => utilizationRate(items));
  upsertChart("sectorChart", "bar", Object.keys(sectorCounts), Object.values(sectorCounts), "Projects", ["#aa182c"]);
  upsertChart("statusChart", "doughnut", Object.keys(statusCounts), Object.values(statusCounts), "Projects", ["#16854f", "#2563eb", "#d97706", "#aa182c"]);
  upsertChart("monthlyChart", "line", MONTHS, monthly, "Execution rate", ["#aa182c"]);
  upsertChart("budgetChart", "bar", Object.keys(sectorUtilization), Object.values(sectorUtilization), "Utilization rate", ["#414042"], true);
}

function renderStatusBreakdown(data) {
  const statuses = ["Completed", "In Progress", "At Risk", "Not Started"];
  document.getElementById("statusBreakdown").innerHTML = statuses.map((status) => {
    const items = data.filter((project) => project.status === status);
    const list = items.slice(0, 4).map((project) => `
      <div class="mini-project" data-id="${project.id}">
        <strong>${project.name}</strong>
        <span>${project.mda}</span>
      </div>
    `).join("") || `<div class="mini-project"><strong>No projects</strong><span>No matching records in this status.</span></div>`;
    return `
      <article class="status-card ${slug(status)}" data-status="${status}">
        <strong>${formatNumber(items.length)}</strong>
        <span>${status}</span>
        <div class="project-mini-list">${list}</div>
      </article>
    `;
  }).join("");
  document.querySelectorAll(".status-card[data-status]").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest(".mini-project[data-id]")) return;
      document.getElementById("statusFilter").value = card.dataset.status;
      activatePage("portfolio");
    });
  });
  bindProjectClicks();
}

function renderOverviewWatchlist(data) {
  const watch = data
    .filter((project) => project.status === "At Risk" || project.status === "Not Started")
    .sort((a, b) => a.progress - b.progress)
    .slice(0, 8);
  document.getElementById("overviewWatchlist").innerHTML = watch.map((project) => `
    <div class="mini-project" data-id="${project.id}">
      <strong>${project.name}</strong>
      <span>${project.mda} · ${project.status} · ${project.progress}%</span>
    </div>
  `).join("") || emptyState("No current watchlist items under the selected filters.");
  bindProjectClicks();
}

function renderProjectCards(data) {
  document.getElementById("projectCards").innerHTML = data.map((project) => `
    <article class="project-card" data-id="${project.id}">
      <h4>${project.name}</h4>
      <p>${project.mda}</p>
      <span class="badge ${slug(project.status)}">${project.status}</span>
      <div class="metric-row"><span>Cluster</span><strong>${project.cluster}</strong></div>
      <div class="metric-row"><span>LGA</span><strong>${project.lga}</strong></div>
      <div class="metric-row"><span>Budget</span><strong>${compactCurrency(project.budget)}</strong></div>
      <div class="metric-row"><span>Spend</span><strong>${compactCurrency(project.spend)}</strong></div>
      <div class="metric-row"><span>SDG</span><strong>${project.sdg}</strong></div>
      <div class="progress-track" style="margin-top:10px"><div class="progress-fill" style="width:${clamp(project.progress)}%"></div></div>
    </article>
  `).join("") || emptyState("No project cards match the selected filters.");
  bindProjectClicks();
}

function renderMdaPortfolio(data) {
  const groups = groupBy(data, "mda");
  document.getElementById("mdaGrid").innerHTML = Object.entries(groups).sort((a, b) => b[1].length - a[1].length).map(([mda, items]) => {
    const details = getMdaDetails(mda);
    return `
      <article class="mda-card">
        <h4>${mda}</h4>
        <p><strong>Mandate:</strong> ${details[0]}</p>
        <p><strong>Objectives:</strong> ${details[1]}</p>
        <p><strong>Vision:</strong> ${details[2]}</p>
        <div class="metric-row"><span>Projects</span><strong>${items.length}</strong></div>
        <div class="metric-row"><span>Budget</span><strong>${compactCurrency(sum(items, "budget"))}</strong></div>
        <div class="metric-row"><span>Avg. execution</span><strong>${round(average(items, "progress"))}%</strong></div>
      </article>
    `;
  }).join("") || emptyState("No MDA records match the selected filters.");
}

function renderRunRate(data) {
  const avgRunRate = round(average(data, "progress"));
  const expected = round(average(data.map((p) => ({ expected: expectedProgress(p.startDate, p.dueDate) })), "expected"));
  const atRisk = countStatus(data, "At Risk");
  const completed = countStatus(data, "Completed");
  const diagnostics = [
    ["Average run rate", `${avgRunRate}%`, "Mean actual execution progress."],
    ["Expected progress", `${expected}%`, "Time-weighted progress based on start and due dates."],
    ["At-risk projects", formatNumber(atRisk), "Projects behind expected execution curve."],
    ["Completion conversion", `${data.length ? round((completed / data.length) * 100) : 0}%`, "Share of portfolio completed."]
  ];
  document.getElementById("runRateGrid").innerHTML = diagnostics.map(([title, value, note]) => `
    <div class="diagnostic-card"><div class="kpi-value">${value}</div><p class="kpi-label">${title}</p><p class="kpi-note">${note}</p></div>
  `).join("");
}

function renderOutputs(data) {
  const groups = groupBy(data, "mda");
  document.getElementById("outputGrid").innerHTML = Object.entries(groups).sort((a, b) => b[1].length - a[1].length).map(([mda, items]) => `
    <article class="output-card">
      <h4>${mda}</h4>
      <p>${items.slice(0, 3).map((project) => project.outputSummary).join(" ")}</p>
      <div class="metric-row"><span>Outputs tracked</span><strong>${formatNumber(items.length)}</strong></div>
      <div class="metric-row"><span>Jobs supported</span><strong>${formatNumber(sum(items, "jobsCreated"))}</strong></div>
      <div class="metric-row"><span>Execution</span><strong>${round(average(items, "progress"))}%</strong></div>
    </article>
  `).join("") || emptyState("No output records match the selected filters.");
}

function renderOutcomeImpact(data) {
  const totals = summarize(data);
  const outcomes = [
    ["Direct beneficiaries", formatNumber(sum(data, "directPeople")), "People directly reached by sampled projects."],
    ["Indirect beneficiaries", formatNumber(sum(data, "indirectPeople")), "Estimated wider population reached."],
    ["Total impacted", formatNumber(sum(data, "totalImpacted")), "Combined direct and indirect impact."],
    ["Jobs created", formatNumber(sum(data, "jobsCreated")), "Employment and livelihood support."],
    ["Women inclusion", `${round(average(data, "womenPct"))}%`, "Average women participation."],
    ["Youth inclusion", `${round(average(data, "youthPct"))}%`, "Average youth participation."],
    ["Budget-to-impact", totals.spend ? `${round(sum(data, "totalImpacted") / (totals.spend / 1000000000))}/Nbn` : "0/Nbn", "People reached per billion naira spent."]
  ];
  document.getElementById("outcomeMetrics").innerHTML = outcomes.map(([label, value, note]) => `
    <div class="finance-item"><div class="finance-label"><span>${label}</span><span>${value}</span></div><p class="kpi-note">${note}</p></div>
  `).join("");
  const sdgGroups = groupBy(data, "sdg");
  const colors = ["#aa182c", "#ffbf3c", "#414042", "#16854f", "#2563eb", "#d97706", "#7d0d1d"];
  document.getElementById("sdgGrid").innerHTML = Object.entries(sdgGroups).sort((a, b) => b[1].length - a[1].length).map(([sdg, items], index) => `
    <div class="sdg-card" style="background:${colors[index % colors.length]}">
      <strong>${sdg}</strong>
      <span>${items.length}</span>
      <small>${compactCurrency(sum(items, "budget"))} · ${formatNumber(sum(items, "totalImpacted"))} impacted</small>
    </div>
  `).join("") || emptyState("No SDG records match the selected filters.");
}

function getMdaDetails(mda) {
  return MDA_DETAILS[mda] || ["Deliver sector-specific capital projects.", "Improve execution performance and public value.", "Effective institutions delivering measurable results."];
}

function renderFinance(data) {
  const totals = summarize(data);
  const releaseRate = totals.budget ? (totals.released / totals.budget) * 100 : 0;
  const utilization = totals.budget ? (totals.spend / totals.budget) * 100 : 0;
  const variance = totals.budget - totals.spend;
  const metrics = [
    ["Total allocation", compactCurrency(totals.budget), 100],
    ["Total release", compactCurrency(totals.released), releaseRate],
    ["Total utilization", compactCurrency(totals.spend), utilization],
    ["Release rate", `${round(releaseRate)}%`, releaseRate],
    ["Utilization rate", `${round(utilization)}%`, utilization],
    ["Budget variance", compactCurrency(variance), totals.budget ? (variance / totals.budget) * 100 : 0]
  ];
  document.getElementById("financeMetrics").innerHTML = metrics.map(([label, amount, pct]) => `
    <div class="finance-item">
      <div class="finance-label"><span>${label}</span><span>${amount}</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${clamp(pct)}%"></div></div>
    </div>
  `).join("");
}

function renderInsights(data) {
  const sectorGroups = groupBy(data, "sector");
  const lgaGroups = groupBy(data, "lga");
  const bestSector = bestKey(sectorGroups, (items) => average(items, "progress"));
  const riskSector = bestKey(sectorGroups, (items) => countStatus(items, "At Risk"));
  const bestLga = bestKey(lgaGroups, (items) => average(items, "progress"));
  const utilization = utilizationRate(data);
  const atRisk = countStatus(data, "At Risk");
  const insights = [
    ["Best performing sector", bestSector ? `${bestSector} leads at ${round(average(sectorGroups[bestSector], "progress"))}% execution.` : "No sector data in view.", "normal"],
    ["Highest risk pressure", riskSector ? `${riskSector} has ${countStatus(sectorGroups[riskSector], "At Risk")} at-risk projects.` : "No risk data in view.", atRisk ? "warning" : "normal"],
    ["Top LGA execution", bestLga ? `${bestLga} is strongest at ${round(average(lgaGroups[bestLga], "progress"))}% average execution.` : "No LGA data in view.", "normal"],
    ["Budget utilization", utilization < 45 ? `Utilization is low at ${utilization}%. Review releases and implementation blockers.` : `Utilization is tracking at ${utilization}%.`, utilization < 45 ? "danger" : "normal"],
    ["At-risk projects", `${atRisk} project${atRisk === 1 ? "" : "s"} require delivery attention.`, atRisk ? "warning" : "normal"]
  ];
  document.getElementById("insightsList").innerHTML = insights.map(([title, body, tone]) => `
    <div class="insight ${tone === "normal" ? "" : tone}"><strong>${title}</strong>${body}</div>
  `).join("");
}

function renderTable(data) {
  const sorted = [...data].sort((a, b) => compare(a[state.sortKey], b[state.sortKey]) * (state.sortDirection === "asc" ? 1 : -1));
  text("tableCount", `${formatNumber(sorted.length)} project${sorted.length === 1 ? "" : "s"}`);
  document.getElementById("projectTableBody").innerHTML = sorted.map((p) => `
    <tr data-id="${p.id}">
      <td class="project-name">${p.name}<span class="subtext">${p.mda} - ${p.sdg}</span></td>
      <td>${p.cluster}</td>
      <td>${p.lga}</td>
      <td>${compactCurrency(p.budget)}</td>
      <td>${compactCurrency(p.spend)}</td>
      <td><span class="badge ${slug(p.status)}">${p.status}</span></td>
      <td>${p.mda}</td>
      <td>${p.sdg}</td>
    </tr>
  `).join("") || `<tr><td colspan="8">${emptyState("No projects match the current filters.")}</td></tr>`;
  bindProjectClicks();
}

function openProjectModal(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;
  const mdaDetails = getMdaDetails(project.mda);
  document.getElementById("modalBody").innerHTML = `
    <h2 id="modalTitle">${project.name}</h2>
    <div class="modal-meta">${project.mda} · ${project.lga} · ${project.year} · ${project.quarter} · ${project.sdg}</div>
    <span class="badge ${slug(project.status)}">${project.status}</span>
    <span class="badge" style="margin-left:6px;background:var(--abia-red);color:#fff">${project.funding}</span>
    <div class="modal-layout">
      <div>
        <div class="modal-grid">
          <div class="modal-stat"><span>MDA Alignment</span><strong>${mdaDetails[0]}</strong></div>
          <div class="modal-stat"><span>Location</span><strong>${project.lga}</strong></div>
          <div class="modal-stat"><span>Start Date</span><strong>${project.startDate}</strong></div>
          <div class="modal-stat"><span>Due Date</span><strong>${project.dueDate}</strong></div>
          <div class="modal-stat"><span>Progress</span><strong>${project.progress}% complete</strong></div>
          <div class="modal-stat"><span>Status</span><strong>${project.status}</strong></div>
          <div class="modal-stat"><span>Budget</span><strong>${compactCurrency(project.budget)}</strong></div>
          <div class="modal-stat"><span>Released</span><strong>${compactCurrency(project.released)}</strong></div>
          <div class="modal-stat"><span>Spend</span><strong>${compactCurrency(project.spend)} (${project.utilisation}%)</strong></div>
          <div class="modal-stat"><span>Contractor</span><strong>${project.contractor}</strong></div>
        </div>
        <div class="modal-panel" style="margin-top:12px">
          <h4>Progress Summary</h4>
          <p>${project.milestoneComment}</p>
          <div class="progress-track"><div class="progress-fill" style="width:${clamp(project.progress)}%"></div></div>
        </div>
      </div>
      <aside class="modal-panel">
        <h4>Outputs</h4>
        <p>${project.outputSummary}</p>
        <h4>Outcomes / Impact</h4>
        <p>${project.outcomeSummary}</p>
        <h4>Image Links</h4>
        <div class="image-links">
          ${project.imageLinks.map((link, index) => `<a href="${link}" target="_blank" rel="noopener">Project image ${index + 1}</a>`).join("")}
        </div>
      </aside>
    </div>
  `;
  document.getElementById("projectModal").hidden = false;
}

function closeModal() {
  document.getElementById("projectModal").hidden = true;
}

function sortBy(key) {
  state.sortDirection = state.sortKey === key && state.sortDirection === "desc" ? "asc" : "desc";
  state.sortKey = key;
  renderDashboard();
}

function resetFilters() {
  ["yearFilter", "quarterFilter", "sectorFilter", "lgaFilter", "statusFilter", "fundingFilter"].forEach((id) => document.getElementById(id).value = "All");
  document.getElementById("searchFilter").value = "";
  renderDashboard();
}

function exportCsv() {
  const rows = getFilteredProjects();
  const headers = ["Project Name", "Cluster", "Sector", "MDA", "LGA", "Year", "Quarter", "Start Date", "Due Date", "Budget", "Released", "Utilized", "Execution %", "Status", "Funding Source", "SDG", "Contractor", "Last Updated"];
  const body = rows.map((p) => [p.name, p.cluster, p.sector, p.mda, p.lga, p.year, p.quarter, p.startDate, p.dueDate, p.budget, p.released, p.spend, p.progress, p.status, p.funding, p.sdg, p.contractor, p.lastUpdated]);
  const csv = [headers, ...body].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "abia-filtered-projects.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function bindProjectClicks() {
  document.querySelectorAll("[data-id]").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();
      openProjectModal(Number(item.dataset.id));
    });
  });
}

function upsertChart(id, type, labels, data, label, colors, horizontal = false) {
  const ctx = document.getElementById(id);
  if (charts[id]) charts[id].destroy();
  charts[id] = new Chart(ctx, {
    type,
    data: {
      labels,
      datasets: [{
        label,
        data,
        backgroundColor: type === "doughnut" ? colors : colors[0],
        borderColor: colors[0],
        borderWidth: type === "line" ? 3 : 1,
        fill: type === "line",
        tension: 0.34
      }]
    },
    options: {
      indexAxis: horizontal ? "y" : "x",
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: type === "doughnut" } },
      scales: type === "doughnut" ? {} : { y: { beginAtZero: true, grid: { color: "#edf1f5" } }, x: { grid: { display: false } } }
    }
  });
}

function summarize(items) {
  return {
    budget: sum(items, "budget"),
    spend: sum(items, "spend"),
    released: sum(items, "released"),
    avgProgress: average(items, "progress")
  };
}

function aggregateCount(items, key) {
  return items.reduce((acc, item) => {
    acc[item[key]] = (acc[item[key]] || 0) + 1;
    return acc;
  }, {});
}

function aggregateBy(items, key, fn) {
  const groups = groupBy(items, key);
  return Object.fromEntries(Object.entries(groups).map(([name, group]) => [name, fn(group)]));
}

function groupBy(items, key) {
  return items.reduce((acc, item) => {
    (acc[item[key]] ||= []).push(item);
    return acc;
  }, {});
}

function bestKey(groups, scorer) {
  return Object.keys(groups).sort((a, b) => scorer(groups[b]) - scorer(groups[a]))[0];
}

function unique(values) { return [...new Set(values)]; }
function value(id) { return document.getElementById(id).value; }
function text(id, content) { document.getElementById(id).textContent = content; }
function sum(items, key) { return items.reduce((total, item) => total + Number(item[key] || 0), 0); }
function average(items, key) { return items.length ? sum(items, key) / items.length : 0; }
function round(value) { return Math.round(value || 0); }
function clamp(value) { return Math.max(0, Math.min(100, round(value))); }
function countStatus(items, status) { return items.filter((p) => p.status === status).length; }
function completionRate(items) { return items.length ? round((countStatus(items, "Completed") / items.length) * 100) : 0; }
function utilizationRate(items) { const budget = sum(items, "budget"); return budget ? round((sum(items, "spend") / budget) * 100) : 0; }
function formatNumber(value) { return new Intl.NumberFormat("en-NG").format(value || 0); }
function compactCurrency(value) {
  if (!value) return "N0";
  if (value >= 1_000_000_000) return `N${(value / 1_000_000_000).toFixed(1)}bn`;
  if (value >= 1_000_000) return `N${(value / 1_000_000).toFixed(0)}m`;
  return `N${formatNumber(value)}`;
}
function slug(value) { return String(value).toLowerCase().replace(/\s+/g, "-"); }
function compare(a, b) {
  if (typeof a === "number" && typeof b === "number") return a - b;
  return String(a).localeCompare(String(b));
}
function emptyState(message) { return `<p class="subtext">${message}</p>`; }

