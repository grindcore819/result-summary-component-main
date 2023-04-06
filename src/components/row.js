import style from './Row.module.css'

const classMap = new Map();
classMap.set("Reaction", style.red);
classMap.set("Memory", style.yellow);
classMap.set("Verbal", style.green);
classMap.set("Visual", style.blue);
export default function Row({title, result, icon}) {
    return(
        <div className={style.resultDashboardRow + " " +classMap.get(title)}>
          <div><img src={icon}/>{title}</div>
          <div><span className={style.result}>{result}</span><span className={style.denominator}> / 100</span></div>
        </div>
    )
}