import React from 'react';
import './experience.css'


class Experience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <div className='exp'>
                <div className='experience'>
                    <div className='experience_image'>
                        <a href='https://www.anera.org/blog/anera-rbk/' target='_blank'><img src='https://cdnjobs.net/cached_uploads/fit/140/140/2020/09/29/214124-png-1601389804.png' /></a>
                    </div>
                    <h2>RBK & Anera</h2>
                    <h5>Jul 2020 - Jan 2021</h5>
                    <h4>Full Stack Web Developer</h4>
                    <p>
                        <li>Learning new technologies  </li>
                        <br />
                        <li>Programming application and sites</li>
                        <br />
                        <li>Collaborated with a team</li>
                        <br />
                        <li>Improve programming and communication skills</li>
                        <br />
                        <li><span id="tech">Technology:</span>React JS/Express JS/MongoDB</li>
                    </p>

                </div>
                <div className='experience'>
                    <div className='experience_image'>
                      <a href='https://financesonline.com/freelance-platforms-analysis-features-benefits-pricing/' target='_blank'>  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAwFBMVEX///8gJC9vrP0AABMdISxmqPwVGicrMDsAAADA2f0AABYAABAAABRtq/0AABgbHytmaW8AAAsACBxfpfzy8vM7PkYADB0RFyV8s/1iZGrz+P6y0f0JECAAAAfNztD4+fnj5OV4en/Q0dPBwsTf7P7u9f6fxv3Y2du0tbiJi4/p6eqen6PR4/3m8P6pzP27vL+Fh4tMT1aXmZy31P2NvP2Rv/3F3P4xNT5aXGN/tfypqq1FSFB7fYE3O0SJio5vcXZi0bUcAAAMgklEQVR4nO2ceX+iOheAgyxaUamgohYBlxa3unV32uv3/1ZvQnLYbW3rzLy/6Xn+uZcGQnJydryXEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBkD/IxPvwln6f9O8uPuLu7vH6D6z3rzKxbibv39Ev3RNyY6nvYFnW/cXtn1nwX+VetUp372z0tlS3Lgjplo5QV9WXqw/k/c9wa5VKqvXy2C8enqhUINY1ubaKJKVa3ZvlkSf/Se7rXD8elgWDSy6jLiGPGWnRJ9SHH2F7SSYgBbW+yprThRhTV4Q8qGnby938I7gPnXedoqrdu2RIu4q0yVoSL7a90s+yvST9yfLx4mp1c//SpYKwuhcgiJuE5aleqIJUqj8j7gkuHpfLye11v1g3+te3kyXXrlWXEpocVT2L5g8rq7tafpyX/UuURHJUL3W7L/cPN6urOya+yVHx9akAqQTp6D+fdeaIHVG9zh1VlFnSuMjkt1pd3ZLrUP3+9mL/OjeJsFaYZlL5EfJiMZj+vbw83NysVkWZxQ/gI2mV1EeyhHvqAvXqby/7L/HwvrTq3YLyRv2hmiWy9qPQpOoxJ071ByUMGV7e060XGjLz6vazcoYU3ePSsibkIjdaf8nP0XKn0+na9f/44v803vGeywMheSut32RncLeybpqdhl7pnWVF/pCz+T9U4X6p2G/VrVtylVc79S7z/GygSRzt+SwLumzYIRX/LNOdl+sjwroh/QITzQbDRVMCnN1Z1vPLCGdTjP9DzaLSUovEpV6TVYGwrHSpM69EspLM6TlW49lKOJvx6xyznZ/bgu6nuiL9oqaolX505oCoFGUQnGMxc6Gq2uEcs/0GJgW+iSb4RQqXCYaSIrbW0eyns6xlXD2rUf8Gllklon78tiipyATDQOY7M7Yt70wuZt/hUzbW55nvN5CTFq2FCj1ZOhhOG+d0VyGvNp9SP4tR/x7S3yFoBT0p/oyTbriDy6rmd+YFiSzV80euG7QK3tsKXHc0T/xBBENpED88D0ajYJ5/FmYoGKTTjrMvDBcxKlrEp7lLCqd7rGxU08HwUuRYSrvdfhqRxVOb8bSjmWpVHoh45u2fHV2u1WT9bZbelTt8ksMB+3IMfxO6qkjsIthvnssdXaboRm8Klr59Y695o3nd+LXMRpvlWUII/n9t9r6aLJd7oPKt/bbDF9GeZeXlu2RS6kaUcnl3nrgZyJKpYsVi5pmkLdRAMhSlOSZtjf5TUZzNa5NK0R6G98wcUxNhQHGaCbfttnVbPK9o+pbLcT4QEeOSPVrp2PAsvaeqcZGOKgp9j2E8uU+ymEHpaCAC79B0YFmK7fC/bcxoEYYjL1KbCCoBNSzRgSpZ3ZO+Vq0i+dCQ91Isq/vUE54ZZ1mS7hMHYmPodzpsTb7UUaTkXa/w8LBiJAe0TrjbkS6C4YxelFN30H1WQq8PMUBqJMY1oceB4ySe4FVFYDipRTQ3iU2sK9VWlFKqpYtTREXiZiCtoJfF9XUmGPp6vADFTF1SqlQPRo3MfqWmMIxtJzOgbZOCCEPGIHOLpFSZ/s2c7N8ZPCIE6Rfa7GzGTSVzbyWyerLTjSeIZnVrdXpM581AVkF3i2sgNS13yIkYNON25dSKZJ/MzaysqCmGj/byG9aZ2vyXCIZ+M3dPh5nxs5b7O8XcE5b/p1/Y2bP8JisrySjDFg6ypPXEfq37T/XqQmnRCjrf84t0LskOdmw7Tu0Qm0coFMPxyBssXXNsWLHMTnUBcjUcJ1WIgyCoaURnQd1gtEumflnr5ISGe2mn/yi7xCsXLEJ3ww14TL/t/4hH96t2P9sDvldDUysWFZ0w/ZnnYMM6KfMoRZI0U9dtemB72K1+2G3gzOnaSKsBJ/8220UGaVMbKPPtKOzoFxVZH8gmPREHVFgx6MNwRIqj66YOorCpIwrAERjV5qCp69XKnOyEY1VqdBHgu3h9MH9iK6YWf2vVc+2UE3ipW31yd0Sx6keCockvtyCO56kf2r4ohhRnxFYmwhFToB14pk1S5s05aYmBUMtabjAXPmQMAjK9qGxQpB211aAM+5/FM9FA6dG8KhiPiaeDZH06jy/mCSvPEXcStRHNyW++9LWvuyLesc58PR0MiThvaBDAJRSJ6xr/Q5VXLhu+E6VNIGyGRhXrgzyKBGFv0m8iT9C4odOmy4aF2D91Ty0QoxanUnuhWDI3vIMWHcZ6wFdhtsjFF3/cct0v6vkJK1ylboX+jEiooF9gQ7+gxxcG3nTBtUZ5I66QTpUHpZaYp+aSqRntPE05btyAp6yNuDSgmByTdUERLtTdaPNL8bDxHNmFUibfoKjnVxgMXbG2Dk/yohRJLBU6U9owvc5fUew3vZSU5SAaqbmJ93ieNwfzPMRlQ4Orj1BYFnzBaQ786Fmwa3tGkndTh+qBRW6/JawjeUNJzfRn4EyFgiSOOCSK/IYZInZCc3NwbpITDoA/arZiQfB8vrV+7bXtaqMK2a+zyGkExE8aHqCurMZrHEVhly8Cbn6NssKcxX9SWkdklfFY0ZnS3D152eSXZAwhLw11xFIu8Ql3b8SCUEJpPzeqNq2gEvc01sQTZyIcHiQSxltUV7J/BabJIiOxiAUZC4+as/hPcl1kiOpD9jZQEJ5mRkfcERFsV5hoS51pq1o4QO0zEgQLGYtBPvmklprRCJiMGhbUlcKHpk4wAzUG4ULB83+dgsZfXlZJp5u8hGB4gL0qKSrBqFY44Bwiy2UxYgbFjqLZUTLptLIaEcTFJFQQTqJQfi5chDEIYgd3tPlzEhck33QokBVklqJbDrmiBp8PIX1Xyim2kWlkBspuZLk0ZATwKaT2dnkYtuODgFRBaMRaTEYTCcgSGnHlBymHJKXeJPXixlntW7Ii3Ydc61Qt6PGA7xTRD1IkR8QdAsK7zD4I9tnINeIWcciAwsUMk7RnvjOWHg3FQIVrBMRPWkzCvPIomhBCnv2afRURCgo5xRfpW0w0KWkVySpSENEtTxwxBxQv9+0V/Eg1ZwDDKGR4It8X/keYODsI0IgGfwTi56AVzxt7ocijDbOvirLCvBg/w1INs88L631ZxTkR7ylH5wotZgiGZrbtAZvKxyGw3AHx5aToW3p8BVm6CHlQUtlx+x5yKvZgZPHZV0Fi7CyyI5+CNcKsq0Sj2Srus/Yg+nFrukxfEgIx3yiv/VZr7vuBO54uvNjYpNos4AMjd71ntgOx/ynqOHD/AyZODyLSCK4rUPqFFSeE39pu5LrueLGPF6G1x3QRLT8IRnwRmSTxq7BfJtetOwLtQ2tVfJ9QA4h+ueoBhCkZDX3AegByrWqyXzBAPKPHqjcHzSYbaAw2cf1E3RzYuLEd+e4eTK/SyoY8H0quTTKncmo1OqVJE7dtZhEyexedJpcVfg3xIdp6FK3TY7LywB1wnxRVD5GL2hckpeEvGLxOQVLKLMyNQwZUy5JRrVU7ENI6OY2A+Mlaf8nfEsBSFtmGrCTO8xmSxG997wTPbi1DaVnHfkOaiX5RihRVD56WlwnPyTYFO2Ct0UgQ67gzlXp6m9MIEEbYzdumu4JsKS0zv4jwPCEr/F4wXEFlyNqi90dlFZX4IvoVVA/TXA9ddCQ8Ld/rlBOmwQRX1A5lkSujERA/ZRZZR2nVCpeyz/emuRCF4HKJzad4icpoJq3jHzsyWQ3kinqiethVMseqyDwn8zuZKkSxWTUImlGjgpvGG9egPGK7z2gE/EBJ44tIvZCnrZtBZhHGYJ+wi2/9pCLRoKmr7/XEeh0tpMKj39AUl8nkaSzVRKWiGJrTkMsHESrDj3swYndkZ8tckGGHU9hhjFgMwka04ehbX+IDFZe0mvw1JtcIz+Ejjqiq1xp8HzS0jljK1KjC10W+iFcWDHWx3G/9pCL5Ecx67yPatHfJ6ImjWYvLTNqyHj6FH5Sdt95s6icGgtnWZAON8vNw4XKb2ok5uO8OhmVdd37NqE3OwoEeyx+Hlxwx10Y8Akm7t3/W2Asb7cMOEj5vegi/W8t2+3K25g/64rnvpaSJX7C9K6vT8Wh+Uxxyjg7EN3zlhXTa3HPHF/Ed4k/RLHlA3iN2WSirD4nqZ5TVx4DLsn7sf6LzCUSWhbI6BQtldTK8nYyyOomrOkvcUVYnwbKsd4scJIJlWSirE6EuC2V1KlfqD/6vej/Lvfrz/v8WX8VDvTqdCcoKQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZAv8z/onhtn7QiGIQAAAABJRU5ErkJggg==' /></a>
                    </div>
                    <h2>Freelancer Platforms</h2>
                    <h5>Jan 2020 - present</h5>
                    <h4>Freelance Full Stack Web Developer</h4>
                    <p>
                        <li>Freelance at Upwork/mostaql/Freelancer platforms</li>
                        <br />
                        <li>Developing responsive websites </li>
                        <br />
                        <li> Programming application and sites</li>
                        <br />
                        <li>Hosting an app</li>
                        <br />
                        <li><span id="tech">Technology:</span>JavaScript/React JS/Express JS</li>
                    </p>
                </div>
                <div className='experience'>
                    <div className='experience_images'>
                       <a href='https://www.coursereport.com/schools/founders-and-coders' target='_blank'> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOlTXxM6h--ZY5pmFiOD1RulikXptXKlisxw&usqp=CAU' /></a>
                    </div>
                    <h2>Founders and Coders Programs</h2>
                    <h5>Jun 2019 - Aug 2019</h5>
                    <h4>Full Stack Web Developer</h4>
                    <p>
                        <li>Developed an app using react js  </li>
                        <br />
                        <li>Worked with client remotely</li>
                        <br />
                        <li>Collaborated with a team</li>
                        <br />
                        <li>Hosted for pages in an app</li>
                        <br />
                        <li><span id="tech">Technology:</span>React JS/Express JS/MongoDB</li>
                    </p>

                </div>
            </div>
        );
    }
}


export default Experience