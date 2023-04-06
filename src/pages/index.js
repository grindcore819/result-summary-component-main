import Row from '@/components/row';
import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  let [data, setData] = useState([])
  let average = 0;
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, []);

  if(data !== NaN){
    data.map((value) => {
      average += value.score;
    });

    average = Math.round(average / data.length);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <section className="blue-card">
          <p className="blue-card-title">Your Result</p>
          <div className="blue-card-circle">
            <div className="text-div">
              <h3>{String(average)}</h3> 
              <p>of 100</p>
            </div>
          </div>
          <p className="footer-title">Great</p>
          <p className="footer-p">You scored higher than 65% of the people who have taken these tests.</p>
        </section>
        <section className="white-card">
          <div className="result-dashboard-title">Summary</div>
          <div className="result-dashboard">
            {
              data.map((value, i) => <Row key={i} title={value.category} result={value.score} icon={value.icon}/>)
            }
          </div>
          <button type="button">Continue</button>
        </section>
      </main>
      <footer className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/grindcore819">grindcore819</a>.
      </footer>
    </>
  )
}