const MAKE_CONTACT = "S00227"
const BREAK_CONTACT = "S00229"
const MAKE_CONTACT_DELAYED_CLOSING = "S00243"
const MAKE_CONTACT_DELAYED_OPENING = "S00244"
const BREAK_CONTACT_DELAYED_OPENING = "S00245"
const BREAK_CONTACT_DELAYED_CLOSING = "S00246"
const MAKE_CONTACT_DELAYED = "S00247"
const BREAK_CONTACT_DELAYED = "S00247a"
const MAKE_MANUAL_CONTACT = "S00250"
const BREAK_MANUAL_CONTACT = "S00250a"
const MAKE_PUSH_BUTTON = "S00254"
const BREAK_PUSH_BUTTON = "S00254a"
const MAKE_PULL_BUTTON = "S00255"
const MAKE_TWIST_BUTTON = "S00256"
const BREAK_EMERGENCY_STOP = "S00258"
const MAKE_LIMIT = "S00259"
const BREAK_LIMIT = "S00260"
const MAKE_CONTACTOR = "S00284"
const BREAK_CONTACTOR = "S00286"
const CIRCUIT_BREAKER = "S00287"
const CIRCUIT_2P_BREAKER = "S00287a"
const CIRCUIT_3P_BREAKER = "S00287b"
    
export const Signals = [
  {
    id: 1,
    text:MAKE_CONTACT,
    search:"make,メーク",
    caption:"a接点",
    subcaption:"JIS " + MAKE_CONTACT,
    src:
      MAKE_CONTACT+".svg"
  },
  {
    id: 2,
    text:BREAK_CONTACT,
    search:"break,ブレイク,pff,delay",
    caption:"b接点",
    subcaption:"JIS " + BREAK_CONTACT,
    src:
      BREAK_CONTACT+".svg"
  },
  {
    id: 3,
    text:MAKE_CONTACT_DELAYED_CLOSING,
    search:"make,メーク",
    caption:"a接点(オフディレイ)",
    subcaption:"JIS " + MAKE_CONTACT_DELAYED_CLOSING,
    src:
      MAKE_CONTACT_DELAYED_CLOSING+".svg"
  },
  {
    id: 4,
    text:MAKE_CONTACT_DELAYED_OPENING,
    search:"make,メーク,on,delay",
    caption:"a接点(オンディレイ)",
    subcaption:"JIS " + MAKE_CONTACT_DELAYED_OPENING,
    src:
      MAKE_CONTACT_DELAYED_OPENING+".svg"
  },
  {
    id: 5,
    text:BREAK_CONTACT_DELAYED_OPENING,
    search:"break,ブレイク,off,delay",
    caption:"b接点(オフディレイ)",
    subcaption:"JIS " + BREAK_CONTACT_DELAYED_OPENING,
    src:
      BREAK_CONTACT_DELAYED_OPENING+".svg"
  },
  {
    id: 6,
    text:BREAK_CONTACT_DELAYED_CLOSING,
    search:"break,ブレイク,on,,delay",
    caption:"b接点(オンディレイ)",
    subcaption:"JIS " + BREAK_CONTACT_DELAYED_CLOSING,
    src:
      BREAK_CONTACT_DELAYED_CLOSING+".svg"
  },
  {
    id: 7,
    text:MAKE_CONTACT_DELAYED,
    search:"make,メーク,on,off,delay",
    caption:"a接点(オンディレイオフディレイ)",
    subcaption:"JIS " + MAKE_CONTACT_DELAYED,
    src:
      MAKE_CONTACT_DELAYED+".svg"
  },
  {
    id: 8,
    text:BREAK_CONTACT_DELAYED,
    search:"break,ブレイク,on,off,delay",
    caption:"b接点(オンディレイオフディレイ)",
    subcaption:"JIS " + BREAK_CONTACT_DELAYED,
    src:
      BREAK_CONTACT_DELAYED+".svg"
  },
  {
    id: 9,
    text:MAKE_MANUAL_CONTACT,
    search:"make,メーク,manual",
    caption:"マニュアルボタンa接点",
    subcaption:"JIS " + MAKE_MANUAL_CONTACT,
    src:
      MAKE_MANUAL_CONTACT+".svg"
  },
  // {
  //   id: 10,
  //   text:BREAK_MANUAL_CONTACT,
  //   src:
  //     BREAK_MANUAL_CONTACT+".svg"
  // },
  {
    id: 11,
    text:MAKE_PUSH_BUTTON,
    search:"break,ブレイク,push",
    caption:"押しボタンb接点",
    subcaption:"JIS " + MAKE_PUSH_BUTTON,
    src:
      MAKE_PUSH_BUTTON+".svg"
  },
  {
    id: 12,
    text:BREAK_PUSH_BUTTON,
    search:"break,ブレイク,push",
    caption:"押しボタンb接点",
    subcaption:"JIS " + BREAK_PUSH_BUTTON,
    src:
      BREAK_PUSH_BUTTON+".svg"
  },
  {
    id: 13,
    text:MAKE_PULL_BUTTON,
    search:"make,メーク,pull",
    caption:"引きボタンa接点",
    subcaption:"JIS " + MAKE_PULL_BUTTON,
    src:
      MAKE_PULL_BUTTON+".svg"
  },
  {
    id: 14,
    text:MAKE_TWIST_BUTTON,
    search:"make,メーク,twist",
    caption:"ひねりボタンa接点",
    subcaption:"JIS " + MAKE_TWIST_BUTTON,
    src:
      MAKE_TWIST_BUTTON+".svg"
  },
  {
    id: 15,
    text:BREAK_EMERGENCY_STOP,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + BREAK_EMERGENCY_STOP,
    src:
      BREAK_EMERGENCY_STOP+".svg"
  },
  {
    id: 16,
    text:MAKE_LIMIT,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + MAKE_LIMIT,
    src:
      MAKE_LIMIT+".svg"
  },
  {
    id: 17,
    text:BREAK_LIMIT,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + BREAK_LIMIT,
    src:
      BREAK_LIMIT+".svg"
  },
  {
    id: 18,
    text:MAKE_CONTACTOR,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + MAKE_CONTACTOR,
    src:
      MAKE_CONTACTOR+".svg"
  },
  {
    id: 19,
    text:BREAK_CONTACTOR,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + BREAK_CONTACTOR,
    src:
      BREAK_CONTACTOR+".svg"
  },
  {
    id: 20,
    text:CIRCUIT_BREAKER,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + CIRCUIT_BREAKER,
    src:
      CIRCUIT_BREAKER+".svg"
  },
  {
    id: 21,
    text:CIRCUIT_2P_BREAKER,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + CIRCUIT_2P_BREAKER,
    src:
      CIRCUIT_2P_BREAKER+".svg"
  },
  {
    id: 22,
    text:CIRCUIT_3P_BREAKER,
    search:"b接点,b,break,ブレイク",
    caption:"b接点",
    subcaption:"JIS " + CIRCUIT_3P_BREAKER,
    src:
      CIRCUIT_3P_BREAKER+".svg"
  },
];