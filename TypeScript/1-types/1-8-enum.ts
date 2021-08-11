{
    /**
     * Enum
     */
    // JavaScript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
    const dayOfToday = DAYS_ENUM.MONDAY;
  
    // TypeScript
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'; // union 타입 사용
    enum Days {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday,
    }
    console.log(Days.Monday); // 0
    let day: Days = Days.Saturday;
    day = Days.Tuesday;
    day = 10;
    console.log(day); // 10
    // enum을 사용하게 되면 타입이 정확하게 보장되지 않는다.
  
    let dayOfweek: DaysOfWeek = 'Monday';
    dayOfweek = 'Wednesday';
  }
  
