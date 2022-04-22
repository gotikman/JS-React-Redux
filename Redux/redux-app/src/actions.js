
//!  функції Action Creator

//! окремий експорт для використання кожного за межами файлу
export const inc = () => ({ type: 'INC' })
export const dec = () => ({ type: 'DEC' })
export const rnd = () => ({ type: 'RND', payload: Math.floor(Math.random() * 10) })