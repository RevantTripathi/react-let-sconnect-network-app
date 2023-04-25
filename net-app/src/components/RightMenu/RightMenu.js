import React from 'react'
import "./RightMenu.css";

const RightMenu= () => {
    const news = [
        {
          id: 1,
          title: "U.S. Fed probes Goldman Sachs consumer business",
          link: "https://economictimes.indiatimes.com/news/international/business/u-s-fed-probes-goldman-sachs-consumer-business/articleshow/97190327.cms",
        },
        {
          id: 2,
          title: "Blinken cautions China against changing status quo on Taiwan",
          link: "https://www.newindianexpress.com/world/2023/jan/21/blinken-cautions-china-against-changing-status-quo-on-taiwan-2540009.html",
        },
        {
          id: 3,
          title:
            "UK PM fined 50 pounds for not wearing seat belt; Rishi Sunak accepts mistake, apologises",
          link: "",
        },
        {
          id: 4,
          title:
            "Indian-American Nikki Haley hints at exploring 2024 US presidential run",
          link: "",
        },
        {
          id: 5,
          title: "Elon Musk takes witness stand to defend Tesla buyout tweets",
          link: "",
        },
        {
          id: 6,
          title: "China plays down Covid outbreak with holiday rush at full tilt",
          link: "",
        },
        {
          id: 7,
          title: "December US home sales fall, capping nearly 18% drop in 2022",
          link: "",
        },
        {
          id: 8,
          title:
            "UK PM Rishi Sunak gets fined by police for failing to wear seatbelt",
          link: "",
        },
        {
          id: 1,
          title: "",
          link: "",
        },
      ];

    return(
        <>
            <div className='right_menu_container'>
            <p className='righ_menu_title'>Pro Network News</p>
                <ul>
                    {news.map((value) => (
                       <a href={value.link} target='/blank'> <li className="right_menu_news_title">
                            {value.title.slice(0, 25)}...
                        </li>
                        </a>
                        
                    ))}
                </ul>
            </div>
        </>
    );
}

export default RightMenu
