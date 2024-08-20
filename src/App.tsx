import React, { useState } from 'react'
import { DataTable } from './Table'
import columns from './Table/Columns'


const App: React.FC = () => {
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const [filterField, setFilterField] = useState<string>('')
  const [filterInput, setFilterinput] = useState<string>('')

  const data = [
    {
        "id": 3161926,
        "warranty_id": "UNK6920590",
        "sold_on": "2024-07-22 18:32:40",
        "duration": 12,
        "brand_warranty_duration": 24,
        "amount": "599.00",
        "warranty_type": 17,
        "warranty_start_date": "22-07-2024",
        "warranty_end_date": "21-07-2025",
        "store_id": 311773,
        "distributer_id": null,
        "status": 1,
        "is_verified": 0,
        "display_plan_name": "SCREEN PROTECTION",
        "product_id": "INDSTG20240613000783",
        "policy_id": "IND24G9939185121",
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-22T18:32:40.460705+05:30",
            "createdate": "2024-07-22T18:32:40.460737+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-22T18:32:40.460784+05:30"
        },
        "kitprice": {
            "retailer_price": "599.0",
            "customer_price": "599.00",
            "payment": true
        },
        "items": [
            {
                "model": "Galaxy A03",
                "brand": "SAMSUNG",
                "category_id": 708,
                "purchasedate": "2024-07-01T00:00:00+05:30",
                "serialnumber": "311610909475599",
                "imeinumber": "311610909475599",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-A035FZRGINS",
                    "device_model_id": "SM-A035F",
                    "device_basic_model_id": "SM-A035F",
                    "device_model_name": "Galaxy A03"
                }
            }
        ],
        "customer": {
            "name": "Karan veer Raghuvanshi",
            "email": "karan.raghuvanshi@zopper.com",
            "mobile": "8851741189",
            "phone": "8851741189",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [
                {
                    "address": "janakpuri c block delshi",
                    "city": 3,
                    "pincode": 110001,
                    "extrainfo": null
                },
                {
                    "address": "janakpuri c block delshi",
                    "city": 3,
                    "pincode": 110001,
                    "extrainfo": null
                }
            ],
            "secondary_phone": [
                {
                    "phone": "0000000000",
                    "extrainfo": null
                },
                {
                    "phone": "0000000000",
                    "extrainfo": null
                }
            ]
        },
        "linked_plan_details": {}
    },
    {
        "id": 3161926,
        "warranty_id": "UNK6920590",
        "sold_on": "2024-07-22 18:32:40",
        "duration": 12,
        "brand_warranty_duration": 24,
        "amount": "599.00",
        "warranty_type": 17,
        "warranty_start_date": "22-07-2024",
        "warranty_end_date": "21-07-2025",
        "store_id": 311773,
        "distributer_id": null,
        "status": 1,
        "is_verified": 0,
        "display_plan_name": "SCREEN PROTECTION",
        "product_id": "INDSTG20240613000783",
        "policy_id": "IND24G9939185121",
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-22T18:32:40.460705+05:30",
            "createdate": "2024-07-22T18:32:40.460737+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-22T18:32:40.460784+05:30"
        },
        "kitprice": {
            "retailer_price": "599.0",
            "customer_price": "599.00",
            "payment": true
        },
        "items": [
            {
                "model": "Galaxy A03",
                "brand": "SAMSUNG",
                "category_id": 708,
                "purchasedate": "2024-07-01T00:00:00+05:30",
                "serialnumber": "311610909475599",
                "imeinumber": "311610909475599",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-A035FZRGINS",
                    "device_model_id": "SM-A035F",
                    "device_basic_model_id": "SM-A035F",
                    "device_model_name": "Galaxy A03"
                }
            }
        ],
        "customer": {
            "name": "Karan veer Raghuvanshi",
            "email": "karan.raghuvanshi@zopper.com",
            "mobile": "8851741189",
            "phone": "8851741189",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [
                {
                    "address": "janakpuri c block delshi",
                    "city": 3,
                    "pincode": 110001,
                    "extrainfo": null
                },
                {
                    "address": "janakpuri c block delshi",
                    "city": 3,
                    "pincode": 110001,
                    "extrainfo": null
                }
            ],
            "secondary_phone": [
                {
                    "phone": "0000000000",
                    "extrainfo": null
                },
                {
                    "phone": "0000000000",
                    "extrainfo": null
                }
            ]
        },
        "linked_plan_details": {}
    },
    {
        "id": 3161926,
        "warranty_id": "UNK6920590",
        "sold_on": "2024-07-22 18:32:40",
        "duration": 12,
        "brand_warranty_duration": 24,
        "amount": "599.00",
        "warranty_type": 17,
        "warranty_start_date": "22-07-2024",
        "warranty_end_date": "21-07-2025",
        "store_id": 311773,
        "distributer_id": null,
        "status": 1,
        "is_verified": 0,
        "display_plan_name": "SCREEN PROTECTION",
        "product_id": "INDSTG20240613000783",
        "policy_id": "IND24G9939185121",
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-22T18:32:40.460705+05:30",
            "createdate": "2024-07-22T18:32:40.460737+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-22T18:32:40.460784+05:30"
        },
        "kitprice": {
            "retailer_price": "599.0",
            "customer_price": "599.00",
            "payment": true
        },
        "items": [
            {
                "model": "Galaxy A03",
                "brand": "SAMSUNG",
                "category_id": 708,
                "purchasedate": "2024-07-01T00:00:00+05:30",
                "serialnumber": "311610909475599",
                "imeinumber": "311610909475599",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-A035FZRGINS",
                    "device_model_id": "SM-A035F",
                    "device_basic_model_id": "SM-A035F",
                    "device_model_name": "Galaxy A03"
                }
            }
        ],
        "customer": {
            "name": "Karan veer Raghuvanshi",
            "email": "karan.raghuvanshi@zopper.com",
            "mobile": "8851741189",
            "phone": "8851741189",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [
                {
                    "address": "janakpuri c block delshi",
                    "city": 3,
                    "pincode": 110001,
                    "extrainfo": null
                },
                {
                    "address": "janakpuri c block delshi",
                    "city": 3,
                    "pincode": 110001,
                    "extrainfo": null
                }
            ],
            "secondary_phone": [
                {
                    "phone": "0000000000",
                    "extrainfo": null
                },
                {
                    "phone": "0000000000",
                    "extrainfo": null
                }
            ]
        },
        "linked_plan_details": {}
    },
    {
        "id": 3161926,
        "warranty_id": "UNK6920590",
        "sold_on": "2024-07-22 18:32:40",
        "duration": 12,
        "brand_warranty_duration": 24,
        "amount": "599.00",
        "warranty_type": 17,
        "warranty_start_date": "22-07-2024",
        "warranty_end_date": "21-07-2025",
        "store_id": 311773,
        "distributer_id": null,
        "status": 1,
        "is_verified": 0,
        "display_plan_name": "SCREEN PROTECTION",
        "product_id": "INDSTG20240613000783",
        "policy_id": "IND24G9939185121",
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-22T18:32:40.460705+05:30",
            "createdate": "2024-07-22T18:32:40.460737+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-22T18:32:40.460784+05:30"
        },
        "kitprice": {
            "retailer_price": "599.0",
            "customer_price": "599.00",
            "payment": true
        },
        "items": [
            {
                "model": "Galaxy A03",
                "brand": "SAMSUNG",
                "category_id": 708,
                "purchasedate": "2024-07-01T00:00:00+05:30",
                "serialnumber": "311610909475599",
                "imeinumber": "311610909475599",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-A035FZRGINS",
                    "device_model_id": "SM-A035F",
                    "device_basic_model_id": "SM-A035F",
                    "device_model_name": "Galaxy A03"
                }
            }
        ],
        "customer": {
            "name": "Karan veer Raghuvanshi",
            "email": "karan.raghuvanshi@zopper.com",
            "mobile": "8851741189",
            "phone": "8851741189",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [
                {
                    "address": "janakpuri c block delshi",
                    "city": 3,
                    "pincode": 110001,
                    "extrainfo": null
                },
                {
                    "address": "janakpuri c block delshi",
                    "city": 3,
                    "pincode": 110001,
                    "extrainfo": null
                }
            ],
            "secondary_phone": [
                {
                    "phone": "0000000000",
                    "extrainfo": null
                },
                {
                    "phone": "0000000000",
                    "extrainfo": null
                }
            ]
        },
        "linked_plan_details": {}
    },
    {
        "id": 3161926,
        "warranty_id": "UNK6920590",
        "sold_on": "2024-07-22 18:32:40",
        "duration": 12,
        "brand_warranty_duration": 24,
        "amount": "599.00",
        "warranty_type": 17,
        "warranty_start_date": "22-07-2024",
        "warranty_end_date": "21-07-2025",
        "store_id": 311773,
        "distributer_id": null,
        "status": 1,
        "is_verified": 0,
        "display_plan_name": "SCREEN PROTECTION",
        "product_id": "INDSTG20240613000783",
        "policy_id": "IND24G9939185121",
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-22T18:32:40.460705+05:30",
            "createdate": "2024-07-22T18:32:40.460737+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-22T18:32:40.460784+05:30"
        },
        "kitprice": {
            "retailer_price": "599.0",
            "customer_price": "599.00",
            "payment": true
        },
        "items": [
            {
                "model": "Galaxy A03",
                "brand": "SAMSUNG",
                "category_id": 708,
                "purchasedate": "2024-07-01T00:00:00+05:30",
                "serialnumber": "311610909475599",
                "imeinumber": "311610909475599",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-A035FZRGINS",
                    "device_model_id": "SM-A035F",
                    "device_basic_model_id": "SM-A035F",
                    "device_model_name": "Galaxy A03"
                }
            }
        ],
        "customer": {
            "name": "Karan veer Raghuvanshi",
            "email": "karan.raghuvanshi@zopper.com",
            "mobile": "8851741189",
            "phone": "8851741189",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [
                {
                    "address": "janakpuri c block delshi",
                    "city": 3,
                    "pincode": 110001,
                    "extrainfo": null
                },
                {
                    "address": "janakpuri c block delshi",
                    "city": 3,
                    "pincode": 110001,
                    "extrainfo": null
                }
            ],
            "secondary_phone": [
                {
                    "phone": "0000000000",
                    "extrainfo": null
                },
                {
                    "phone": "0000000000",
                    "extrainfo": null
                }
            ]
        },
        "linked_plan_details": {}
    },
    {
        "id": 3161920,
        "warranty_id": "UNK8932963",
        "sold_on": "2024-07-22 16:55:26",
        "duration": 12,
        "brand_warranty_duration": 24,
        "amount": "1099.00",
        "warranty_type": 31,
        "warranty_start_date": null,
        "warranty_end_date": null,
        "store_id": 311773,
        "distributer_id": null,
        "status": 4,
        "is_verified": 0,
        "display_plan_name": "ADLD",
        "product_id": "INDSTG20240613000400",
        "policy_id": null,
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-22T16:55:26.588321+05:30",
            "createdate": "2024-07-22T16:55:26.588351+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-22T16:55:26.588397+05:30"
        },
        "kitprice": {
            "retailer_price": "1099.0",
            "customer_price": "1099.00",
            "payment": false
        },
        "items": [
            {
                "model": "Galaxy Note10+",
                "brand": "SAMSUNG",
                "category_id": 708,
                "purchasedate": "2023-04-01T00:00:00+05:30",
                "serialnumber": "374300347562902",
                "imeinumber": "374300347562902",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-N975FZSGINS",
                    "device_model_id": "SM-N975F",
                    "device_basic_model_id": "SM-N975F",
                    "device_model_name": "Galaxy Note10+"
                }
            }
        ],
        "customer": {
            "name": "111",
            "email": "service@executive.com",
            "mobile": "8778066287",
            "phone": "8778066287",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [],
            "secondary_phone": []
        },
        "linked_plan_details": {}
    },
    {
        "id": 3161919,
        "warranty_id": "UNK6659592",
        "sold_on": "2024-07-22 16:51:28",
        "duration": 12,
        "brand_warranty_duration": 24,
        "amount": "599.00",
        "warranty_type": 17,
        "warranty_start_date": "22-07-2024",
        "warranty_end_date": "21-07-2025",
        "store_id": 311773,
        "distributer_id": null,
        "status": 1,
        "is_verified": 0,
        "display_plan_name": "SCREEN PROTECTION",
        "product_id": "INDSTG20240613000783",
        "policy_id": "IND24G9923638144",
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-22T16:51:28.225399+05:30",
            "createdate": "2024-07-22T16:51:28.225430+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-22T16:51:28.225475+05:30"
        },
        "kitprice": {
            "retailer_price": "599.0",
            "customer_price": "599.00",
            "payment": true
        },
        "items": [
            {
                "model": "Galaxy M02",
                "brand": "SAMSUNG",
                "category_id": 708,
                "purchasedate": "2024-07-02T00:00:00+05:30",
                "serialnumber": "345856845348349",
                "imeinumber": "345856845348349",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-M022GZKBINS",
                    "device_model_id": "SM-M022G",
                    "device_basic_model_id": "SM-M022G",
                    "device_model_name": "Galaxy M02"
                }
            }
        ],
        "customer": {
            "name": "Karan veer Raghuvanshi",
            "email": "karanveerraghuvanshi@gmail.com",
            "mobile": "8851741189",
            "phone": "8851741189",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [],
            "secondary_phone": []
        },
        "linked_plan_details": {}
    },
    {
        "id": 3161901,
        "warranty_id": "UNK6839319",
        "sold_on": "2024-07-21 22:45:28",
        "duration": 24,
        "brand_warranty_duration": 24,
        "amount": "999.00",
        "warranty_type": 32,
        "warranty_start_date": "15-07-2026",
        "warranty_end_date": "15-07-2026",
        "store_id": 311773,
        "distributer_id": null,
        "status": 1,
        "is_verified": 0,
        "display_plan_name": "EW ADLD",
        "product_id": "INDSTG20240613000745",
        "policy_id": "IND24G9943599867",
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-21T22:45:28.707812+05:30",
            "createdate": "2024-07-21T22:45:28.707844+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-21T22:45:28.707891+05:30"
        },
        "kitprice": {
            "retailer_price": "999.0",
            "customer_price": "999.00",
            "payment": true
        },
        "items": [
            {
                "model": "Galaxy M01",
                "brand": "SAMSUNG",
                "category_id": 708,
                "purchasedate": "2024-07-15T00:00:00+05:30",
                "serialnumber": "363865559612818",
                "imeinumber": "363865559612818",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-M013FZK6INS",
                    "device_model_id": "SM-M013F",
                    "device_basic_model_id": "SM-M013F",
                    "device_model_name": "Galaxy M01"
                }
            }
        ],
        "customer": {
            "name": "Sagar1",
            "email": "shivaliktestuser_nsp@zopper.com",
            "mobile": "8283828282",
            "phone": "8283828282",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [],
            "secondary_phone": []
        },
        "linked_plan_details": {
            "Samsung Combo ADLD + EW": {
                "warranty_start_date": "21-07-2024",
                "warranty_end_date": "21-07-2025",
                "duration": 12
            }
        }
    },
    {
        "id": 3161890,
        "warranty_id": "UNK4401519",
        "sold_on": "2024-07-19 17:31:55",
        "duration": 12,
        "brand_warranty_duration": 12,
        "amount": "599.00",
        "warranty_type": 17,
        "warranty_start_date": "19-07-2024",
        "warranty_end_date": "18-07-2025",
        "store_id": 311773,
        "distributer_id": null,
        "status": 1,
        "is_verified": 0,
        "display_plan_name": "SCREEN PROTECTION",
        "product_id": "INDSTG20240613000783",
        "policy_id": "IND24G9958578289",
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-19T17:31:55.668611+05:30",
            "createdate": "2024-07-19T17:31:55.668644+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-19T17:31:55.668691+05:30"
        },
        "kitprice": {
            "retailer_price": "599.0",
            "customer_price": "599.00",
            "payment": true
        },
        "items": [
            {
                "model": "Galaxy M02",
                "brand": "Maharaja",
                "category_id": 708,
                "purchasedate": "2024-01-11T00:00:00+05:30",
                "serialnumber": "358814132831498",
                "imeinumber": "358814132831498",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-M022GZRBINS",
                    "device_model_id": "SM-M022G",
                    "device_basic_model_id": "SM-M022G",
                    "device_model_name": "Galaxy M02"
                }
            }
        ],
        "customer": {
            "name": "erty",
            "email": "qwe@wer.dfg",
            "mobile": "2345323454",
            "phone": "2345323454",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [
                {
                    "address": "nbbnghghghhghg",
                    "city": 241,
                    "pincode": 201301,
                    "extrainfo": null
                },
                {
                    "address": "nbbnghghghhghg",
                    "city": 241,
                    "pincode": 201301,
                    "extrainfo": null
                },
                {
                    "address": "nbbnghghghhghg",
                    "city": 241,
                    "pincode": 201301,
                    "extrainfo": null
                },
                {
                    "address": "nbbnghghghhghg",
                    "city": 241,
                    "pincode": 201301,
                    "extrainfo": null
                },
                {
                    "address": "nbbnghghghhghg",
                    "city": 241,
                    "pincode": 201301,
                    "extrainfo": null
                },
                {
                    "address": "nbbnghghghhghg",
                    "city": 241,
                    "pincode": 201301,
                    "extrainfo": null
                }
            ],
            "secondary_phone": [
                {
                    "phone": "2345323454",
                    "extrainfo": null
                },
                {
                    "phone": "2345323454",
                    "extrainfo": null
                },
                {
                    "phone": "2345323454",
                    "extrainfo": null
                },
                {
                    "phone": "2345323454",
                    "extrainfo": null
                },
                {
                    "phone": "2345323454",
                    "extrainfo": null
                },
                {
                    "phone": "2345323454",
                    "extrainfo": null
                }
            ]
        },
        "linked_plan_details": {}
    },
    {
        "id": 3161873,
        "warranty_id": "UNK4270036",
        "sold_on": "2024-07-19 13:31:42",
        "duration": 12,
        "brand_warranty_duration": 12,
        "amount": "599.00",
        "warranty_type": 17,
        "warranty_start_date": "19-07-2024",
        "warranty_end_date": "18-07-2025",
        "store_id": 311773,
        "distributer_id": null,
        "status": 1,
        "is_verified": 0,
        "display_plan_name": "SCREEN PROTECTION",
        "product_id": "INDSTG20240613000783",
        "policy_id": "IND24G9968532854",
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-19T13:31:42.011032+05:30",
            "createdate": "2024-07-19T13:31:42.011064+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-19T13:31:42.011111+05:30"
        },
        "kitprice": {
            "retailer_price": "599.0",
            "customer_price": "599.00",
            "payment": true
        },
        "items": [
            {
                "model": "Galaxy M02",
                "brand": "Maharaja",
                "category_id": 708,
                "purchasedate": "2024-01-11T00:00:00+05:30",
                "serialnumber": "358814132831450",
                "imeinumber": "358814132831450",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-M022GZRBINS",
                    "device_model_id": "SM-M022G",
                    "device_basic_model_id": "SM-M022G",
                    "device_model_name": "Galaxy M02"
                }
            }
        ],
        "customer": {
            "name": "erty",
            "email": "qwe@wer.dfg",
            "mobile": "2345323454",
            "phone": "2345323454",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [
                {
                    "address": "janakpuri c block delhi",
                    "city": 3,
                    "pincode": 110001,
                    "extrainfo": null
                },
                {
                    "address": "janakpuri c block delhi",
                    "city": 3,
                    "pincode": 110001,
                    "extrainfo": null
                },
                {
                    "address": "janakpuri c block delshi",
                    "city": 3,
                    "pincode": 110058,
                    "extrainfo": null
                },
                {
                    "address": "nbbnghghghhghg",
                    "city": 241,
                    "pincode": 201301,
                    "extrainfo": null
                }
            ],
            "secondary_phone": [
                {
                    "phone": "0000000000",
                    "extrainfo": null
                },
                {
                    "phone": "0000000000",
                    "extrainfo": null
                },
                {
                    "phone": "0000000000",
                    "extrainfo": null
                },
                {
                    "phone": "2345323454",
                    "extrainfo": null
                }
            ]
        },
        "linked_plan_details": {}
    },
    {
        "id": 3161770,
        "warranty_id": "UNK5421102",
        "sold_on": "2024-07-17 15:15:43",
        "duration": 12,
        "brand_warranty_duration": 24,
        "amount": "499.00",
        "warranty_type": 13,
        "warranty_start_date": null,
        "warranty_end_date": null,
        "store_id": 311773,
        "distributer_id": null,
        "status": 4,
        "is_verified": 0,
        "display_plan_name": "NEW WARRANTY KIT",
        "product_id": "INDSTG20240613000171",
        "policy_id": null,
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-17T15:15:43.028539+05:30",
            "createdate": "2024-07-17T15:15:43.028570+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-17T15:15:43.028618+05:30"
        },
        "kitprice": {
            "retailer_price": "499.0",
            "customer_price": "499.00",
            "payment": true
        },
        "items": [
            {
                "model": "Galaxy M01",
                "brand": "SAMSUNG",
                "category_id": 708,
                "purchasedate": "2024-07-17T00:00:00+05:30",
                "serialnumber": "389893814556508",
                "imeinumber": "389893814556508",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-M013FZB5INS",
                    "device_model_id": "SM-M013F",
                    "device_basic_model_id": "SM-M013F",
                    "device_model_name": "Galaxy M01"
                }
            }
        ],
        "customer": {
            "name": "t",
            "email": "hg@gg.com",
            "mobile": "y",
            "phone": "y",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [],
            "secondary_phone": []
        },
        "linked_plan_details": {}
    },
    {
        "id": 3161765,
        "warranty_id": "UNK8019468",
        "sold_on": "2024-07-17 12:42:53",
        "duration": 12,
        "brand_warranty_duration": 12,
        "amount": "599.00",
        "warranty_type": 17,
        "warranty_start_date": "17-07-2024",
        "warranty_end_date": "16-07-2025",
        "store_id": 311773,
        "distributer_id": null,
        "status": 1,
        "is_verified": 0,
        "display_plan_name": "SCREEN PROTECTION",
        "product_id": "INDSTG20240613000783",
        "policy_id": "IND24G9958114828",
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-17T12:42:53.205662+05:30",
            "createdate": "2024-07-17T12:42:53.205697+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-17T12:42:53.205748+05:30"
        },
        "kitprice": {
            "retailer_price": "599.0",
            "customer_price": "599.00",
            "payment": true
        },
        "items": [
            {
                "model": "Galaxy M02",
                "brand": "Maharaja",
                "category_id": 708,
                "purchasedate": "2024-01-11T00:00:00+05:30",
                "serialnumber": "358814132831453",
                "imeinumber": "358814132831453",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-M022GZRBINS",
                    "device_model_id": "SM-M022G",
                    "device_basic_model_id": "SM-M022G",
                    "device_model_name": "Galaxy M02"
                }
            }
        ],
        "customer": {
            "name": "erty",
            "email": "qwe@wer.dfg",
            "mobile": "2345323454",
            "phone": "2345323454",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [
                {
                    "address": "janakpuri",
                    "city": 3,
                    "pincode": 110058,
                    "extrainfo": null
                }
            ],
            "secondary_phone": [
                {
                    "phone": "0000000000",
                    "extrainfo": null
                }
            ]
        },
        "linked_plan_details": {}
    },
    {
        "id": 3161646,
        "warranty_id": "UNK8733394",
        "sold_on": "2024-07-15 16:58:06",
        "duration": 12,
        "brand_warranty_duration": 24,
        "amount": "499.00",
        "warranty_type": 13,
        "warranty_start_date": null,
        "warranty_end_date": null,
        "store_id": 311773,
        "distributer_id": null,
        "status": 4,
        "is_verified": 0,
        "display_plan_name": "NEW WARRANTY KIT",
        "product_id": "INDSTG20240613000171",
        "policy_id": null,
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-15T16:58:06.209726+05:30",
            "createdate": "2024-07-15T16:58:06.209759+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-15T16:58:06.209807+05:30"
        },
        "kitprice": {
            "retailer_price": "499.0",
            "customer_price": "499.00",
            "payment": false
        },
        "items": [
            {
                "model": "Galaxy M01",
                "brand": "SAMSUNG",
                "category_id": 708,
                "purchasedate": "2024-07-01T00:00:00+05:30",
                "serialnumber": "362566594578196",
                "imeinumber": "362566594578196",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-M015GZRDINS",
                    "device_model_id": "SM-M015G",
                    "device_basic_model_id": "SM-M015G",
                    "device_model_name": "Galaxy M01"
                }
            }
        ],
        "customer": {
            "name": "google",
            "email": "test@gmail.com",
            "mobile": "9855727473",
            "phone": "9855727473",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [],
            "secondary_phone": []
        },
        "linked_plan_details": {}
    },
    {
        "id": 3161621,
        "warranty_id": "UNK2942552",
        "sold_on": "2024-07-15 14:09:32",
        "duration": 12,
        "brand_warranty_duration": 24,
        "amount": "499.00",
        "warranty_type": 13,
        "warranty_start_date": "08-07-2024",
        "warranty_end_date": "07-07-2025",
        "store_id": 311773,
        "distributer_id": null,
        "status": 1,
        "is_verified": 0,
        "display_plan_name": "NEW WARRANTY KIT",
        "product_id": "INDSTG20240613000171",
        "policy_id": "IND24G9939844111",
        "soldby_id": 53012,
        "warranty": {
            "verified_at": "2024-07-15T14:09:32.404325+05:30",
            "createdate": "2024-07-15T14:09:32.404357+05:30",
            "reviewedby_id": null,
            "extrainfo": "{}",
            "modifiedby_id": 53012,
            "modified_at": "2024-07-15T14:09:32.404404+05:30"
        },
        "kitprice": {
            "retailer_price": "499.0",
            "customer_price": "499.00",
            "payment": true
        },
        "items": [
            {
                "model": "Galaxy M01",
                "brand": "SAMSUNG",
                "category_id": 708,
                "purchasedate": "2024-07-08T00:00:00+05:30",
                "serialnumber": "330034359649331",
                "imeinumber": "330034359649331",
                "price": "10000.00",
                "claimed": false,
                "extrainfo": {
                    "device_model_full_id": "SM-M013FZKGINS",
                    "device_model_id": "SM-M013F",
                    "device_basic_model_id": "SM-M013F",
                    "device_model_name": "Galaxy M01"
                }
            }
        ],
        "customer": {
            "name": "Paisabusiness",
            "email": "Ravi.kumar@zopper.com",
            "mobile": "9292829292",
            "phone": "9292829292",
            "pincode": null,
            "address": "samsung customer default address",
            "district": null,
            "city": null,
            "secondary_address": [],
            "secondary_phone": []
        },
        "linked_plan_details": {}
    }
]

  return (
    <div>
      <h1>Hello, React with TypeScript!</h1>
      <DataTable
        columns={columns}
        data={data}
        totalCount={data.length}
        isDataLoading={false}
        showFilter
        showPagination
        isBorder
        pagination={pagination}
        setPagination={setPagination}
        filterField={filterField}
        setFilterField={setFilterField}
        filterInput={filterField}
        setFilterinput={setFilterinput as any}
        showDownloadButton
        isSideSheet
      />
    </div>
  )
}

export default App
