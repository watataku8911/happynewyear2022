/** Initial life count */
export const MAX_LIFE = 4
/** Interval(ms) of add a new cactus */
export const CACTUS_INTERVAL = {
  MIN: 1200,
  MAX: 3000,
}

/** Charactor's dameged time after hit with a cactus(ms) */
export const CHARA_DAMAGED_TIME = 800
/** Charactor's N-th jump power(px / frame) */
export const CHARA_JUMP_POWER = [22, 18, 13]
/** Charactor's max jump power */
export const CHARA_JUMP_POWER_MAX = 16.8

/** Charactor size */
export const CHARA_SIZE = {
  W: 60,
  H: 80,
}
/** Cactus size */
export const CACTUS_SIZE = {
  W: 30,
  // 'h' is defined in each cactus data.
  MIN_H: 20,
  MAX_H: 100,
}

/** Cactus moving speed(px / frame) */
export const CACTUS_SPEED = 2.65

/** Decrease amount of jump power(px / frame) */
export const GRAVITY = 0.6
