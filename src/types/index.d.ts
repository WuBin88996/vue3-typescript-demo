declare namespace API{
  interface UserInfo {
    userId: number
    userName: string
  }

  interface Result<T>{
    code: number
    msg: string
    data: T
  }

  // interface DiyRes<T, U>{
  //   result: Result<T>
  //   uuData: U
  // }

  // interface DiyRes2<T, U, C> extends DiyRes<T, U> {
  //   cc: number
  //   gg: C
  // }

  // type typeData1<T> = {
  //   key1: string
  //   key2: number
  //   key3: T
  // }

  // type typeData2<T, U> = typeData1<T> & {
  //   key4: boolean
  //   key5: U
  // }
}
