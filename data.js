// JMR: Jeonse-Maemae Ratio, 전세가율
// PHR: Parking-Household Ratio, 세대당 주차대수
const data = [
  {
    name: "상계주공2단지",
    category: "아파트",

    jibunAddress: "서울시 노원구 상계동 746-5",
    roadAddress: "서울시 노원구 동일로 1355",
    
    size: 32,
    
    maemaePriceMin: undefined,
    maemaePriceMax: undefined,
    jeonsePriceMin: undefined,
    jeonsePriceMax: undefined,
    wolsePriceMin: '1000/50',
    wolsePriceMax: '500/55',
    jmr: 50,

    dateWritten: '2024-01-26',

    numHousehold: 2029,
    floor: undefined,
    dateApproval: '1987-11-21',
    age: undefined,
    numParking: 1004,
    phr: 0.49,

    memo: undefined,
  },
  {
    name: "창동주공18단지",
    category: "아파트",

    jibunAddress: "서울시 도봉구 창동 30",
    roadAddress: "서울시 도봉구 노해로70길 119",
    
    size: 32,
    
    maemaePriceMin: undefined,
    maemaePriceMax: undefined,
    jeonsePriceMin: undefined,
    jeonsePriceMax: undefined,
    wolsePriceMin: 1000/53,
    wolsePriceMax: 1000/58,
    jmr: 32,

    dateWritten: '2024-01-26',

    numHousehold: 910,
    floor: undefined,
    dateApproval: 1988-10-26,
    age: undefined,
    numParking: 634,
    phr: 0.69,

    memo: undefined,
  },
]

export default data;