import React from 'react'
// import { Link } from 'react-router-dom'
import { Date } from './index'

export default function Nittei() {
    const schedules = {
        day21: [
            { time: '16:31', event: 'あずさ' },
            { time: '19:10', event: 'ホテル到着' },
            { time: '19:30', event: '泥酔' },
            { time: '23:00', event: '死亡' }],
        day22: [
            { time: '7:15', event: '羽田空港出発' },
            { time: '8:35', event: '函館空港到着' },
            { time: '9:05', event: 'オリックスレンタカーで受け取り' },
            { time: 'ぼちぼち', event: '観光' },
            { time: '18:00', event: '函館ホテル到着' },
            { time: '20:30', event: '泥酔' },
            { time: '23:00', event: '死亡' }],
        day23: [
            { time: '10:00', event: '函館出発' },
            { time: '13:00', event: '熊牧場' },
            { time: '14:30', event: '熊牧場出発' },
            { time: '16:00', event: '小樽' },
            { time: '18:00', event: '小樽出発' },
            { time: "19:30", event: "札幌ホテル到着" },
            { time: '20:00', event: '泥酔' }],
        day24: [
            { time: '9:00', event: '出発' },
            { time: '12:00', event: '青い池' },
            { time: '13:00', event: '青い池出発' },
            { time: '14:00', event: '旭山動物園' },
            { time: "17:00", event: "旭山動物園出発" },
            { time: "22:00", event: "稚内到着" }],
        day25: [
            { time: '9:00', event: '釣り' },
            { time: '夜', event: '泥酔' }],
        day26: [
            { time: '9:00', event: '釣り' },
            { time: '夜', event: '泥酔' }],
        day27: [
            { time: '9:00', event: '釣り' },
            { time: '夜', event: '泥酔' }],
        day28: [
            { time: '9:00', event: '釣り' },
            { time: '夜', event: '泥酔' }],
        day29: [
            { time: '10:50', event: 'オリックスレンタカー返却' },
            { time: '11:50', event: '稚内空港出発' }]
    }

    return (
        <div>
            <h1 className="container-title">contents</h1>
            <div className="container">
                {/* <Date date="日付" lodgingUrl="https://goo.gl/maps/tfz7XeqgjcGnqNcz7" lodgingName="松嶋家" spots="観光スポット" /> */}
                <Date schedules={schedules.day21} date="7/21" lodgingUrl="https://www.jalan.net/yad316240/?contHideFlg=1&ccnt=yado_reservelist_yado&chkin_date=20200721&chkin_child_num=0&chkin_adult_num=3" lodgingName="ビジネスソーシャルホテル蒲田" spots="観光スポット" />
                <Date schedules={schedules.day22} date="7/22" lodgingUrl="https://www.jalan.net/yad324568/?contHideFlg=1" lodgingName="湯の川プリンスホテル" spots="観光スポット" />
                <Date schedules={schedules.day23} date="7/23" lodgingUrl="https://www.jalan.net/yad313982/?contHideFlg=1&ccnt=yado_reservelist_yado&chkin_date=20200723&chkin_child_num=0&chkin_adult_num=3" lodgingName="天然温泉プレミアホテル-CABIN-札幌" spots="観光スポット" />
                <Date schedules={schedules.day24} date="7/24" lodgingUrl="https://goo.gl/maps/tfz7XeqgjcGnqNcz7" lodgingName="松嶋家" spots="観光スポット" />
                <Date schedules={schedules.day25} date="7/25" lodgingUrl="https://goo.gl/maps/tfz7XeqgjcGnqNcz7" lodgingName="松嶋家" spots="観光スポット" />
                <Date schedules={schedules.day26} date="7/26" lodgingUrl="https://goo.gl/maps/tfz7XeqgjcGnqNcz7" lodgingName="松嶋家" spots="観光スポット" />
                <Date schedules={schedules.day27} date="7/27" lodgingUrl="https://goo.gl/maps/tfz7XeqgjcGnqNcz7" lodgingName="松嶋家" spots="観光スポット" />
                <Date schedules={schedules.day28} date="7/28" lodgingUrl="https://goo.gl/maps/tfz7XeqgjcGnqNcz7" lodgingName="松嶋家" spots="観光スポット" />
                <Date schedules={schedules.day29} date="7/29" lodgingUrl="https://goo.gl/maps/Fr87TNZFpQLHqG926" lodgingName="やまなし" spots="観光スポット" />
            </div>
        </div>
    )
}