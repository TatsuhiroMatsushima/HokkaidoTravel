import React from 'react'
// import { Link } from 'react-router-dom'
import { Date } from './index'

export default function Nittei() {
    const schedules = {
        day21: [
            { time: '16:31', event: 'あずさ' },
            { time: '19:10', event: '蒲田ホテルチェックイン' },
            { time: '19:30', event: '泥酔' },
            { time: '23:00', event: '死亡' }],
        day22: [
            { time: '6:02', event: '京急蒲田出発' },
            { time: '6:13', event: '羽田空港到着' },
            { time: '7:15', event: '羽田空港出発' },
            { time: '8:35', event: '函館空港到着' },
            { time: '9:05', event: 'オリックスレンタカーで受け取り' },
            { time: 'ぼちぼち', event: '観光' },
            { time: '18:00', event: '函館ホテルチェックイン' },
            { time: '20:30', event: '泥酔' },
            { time: '23:00', event: '死亡' }],
        day23: [
            { time: '10:00', event: '函館出発' },
            { time: '13:00', event: '熊牧場' },
            { time: '14:30', event: '熊牧場出発' },
            { time: '16:00', event: '小樽' },
            { time: '18:00', event: '小樽出発' },
            { time: "19:30", event: "札幌ホテルチェックイン" },
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
                <Date
                    map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.5929184323277!2d139.71656781520645!3d35.56375468022188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018605b077f9fb7%3A0x51d73fd5e3113d2!2z44OT44K444ON44K544Ob44OG44Or44K944O844K344Oj44OrIOiSsueUsA!5e0!3m2!1sja!2sjp!4v1594525373592!5m2!1sja!2sjp"
                    schedules={schedules.day21}
                    date="7/21"
                    lodgingUrl="https://www.jalan.net/yad316240/?contHideFlg=1&ccnt=yado_reservelist_yado&chkin_date=20200721&chkin_child_num=0&chkin_adult_num=3"
                    lodgingName="ビジネスソーシャルホテル蒲田"
                    spots="観光スポット" />
                <Date
                     map="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d47608.913238448724!2d140.72547179239797!3d41.773206495187786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e0!4m5!1s0x5f9ef4cdef0acfa7%3A0x917a4bf91592b210!2z5Ye96aSo56m65riv!3m2!1d41.7757043!2d140.81582219999999!4m5!1s0x5f9ef39ce8eb1865%3A0x85c4a4b2c3b3292e!2z5Ye96aSo5pyd5biC!3m2!1d41.7725529!2d140.7254175!4m5!1s0x5f9ef2dd978ba0fd%3A0x4fc9b787e5eaebf6!2z56uL5b6F5bKs!3m2!1d41.7450354!2d140.7212027!4m5!1s0x5f9ef300a63389a9%3A0x41579a89acceac6c!2z5Ye96aSo6IGW44Oo44OP44ON5pWZ5Lya!3m2!1d41.7625047!2d140.71282309999998!4m5!1s0x5f9ef3a8785f50a3%3A0xe796ba2772ca1f8!2z6YeR5qOu6LWk44Os44Oz44Ks5YCJ5bqr!3m2!1d41.766156599999995!2d140.71656009999998!4m5!1s0x5f9ef39981b7d1f3%3A0x45043c98e26298fe!2z6YGT5Y2X44GE44GV44KK44Gz6YmE6YGT44ix!3m2!1d41.7765969!2d140.72840689999998!4m5!1s0x5f9ef46bba6392c1%3A0x6c06e856c7341ce5!2z5LqU56ic6YOt5YWs5ZyS!3m2!1d41.7968814!2d140.7561137!4m5!1s0x5f9ef51f43d44ea5%3A0xcde17715eaec3578!2z44OI44Op44OU44K544OB44OM5L-u6YGT6Zmi5aSp5L2_5ZyS!3m2!1d41.787862!2d140.82245799999998!4m5!1s0x5f9ef497034e4f6f%3A0xa513358c633a172b!2z5rmv44Gu5bed44OX44Oq44Oz44K544Ob44OG44Or5ria5Lqt!3m2!1d41.774474999999995!2d140.78425959999998!4m5!1s0x5f9ef2558c0649a9%3A0x3aa277addb8f3ebe!2z5YyX5rW36YGT5Ye96aSo5biCIOWHvemkqOWxsQ!3m2!1d41.7592941!2d140.703917!5e0!3m2!1sja!2sjp!4v1594521117938!5m2!1sja!2sjp"
                    schedules={schedules.day22}
                    date="7/22"
                    lodgingUrl="https://www.jalan.net/yad324568/?contHideFlg=1"
                    lodgingName="湯の川プリンスホテル"
                    spots="観光スポット" />
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m76!1m12!1m3!1d47608.913238448724!2d140.72547179239797!3d41.773206495187786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m61!3e0!4m5!1s0x5f9ef4cdef0acfa7%3A0x917a4bf91592b210!2z5Ye96aSo56m65riv!3m2!1d41.7757043!2d140.81582219999999!4m5!1s0x5f9ef39ce8eb1865%3A0x85c4a4b2c3b3292e!2z5Ye96aSo5pyd5biC!3m2!1d41.7725529!2d140.7254175!4m5!1s0x5f9ef2dd978ba0fd%3A0x4fc9b787e5eaebf6!2z56uL5b6F5bKs!3m2!1d41.7450354!2d140.7212027!4m5!1s0x5f9ef300a63389a9%3A0x41579a89acceac6c!2z5Ye96aSo6IGW44Oo44OP44ON5pWZ5Lya!3m2!1d41.7625047!2d140.71282309999998!4m5!1s0x5f9ef3a8785f50a3%3A0xe796ba2772ca1f8!2z6YeR5qOu6LWk44Os44Oz44Ks5YCJ5bqr!3m2!1d41.766156599999995!2d140.71656009999998!4m5!1s0x5f9ef39981b7d1f3%3A0x45043c98e26298fe!2z6YGT5Y2X44GE44GV44KK44Gz6YmE6YGT44ix!3m2!1d41.7765969!2d140.72840689999998!4m5!1s0x5f9ef46bba6392c1%3A0x6c06e856c7341ce5!2z5LqU56ic6YOt5YWs5ZyS!3m2!1d41.7968814!2d140.7561137!4m5!1s0x5f9ef51f43d44ea5%3A0xcde17715eaec3578!2z44OI44Op44OU44K544OB44OM5L-u6YGT6Zmi5aSp5L2_5ZyS!3m2!1d41.787862!2d140.82245799999998!4m5!1s0x5f9ef497034e4f6f%3A0xa513358c633a172b!2z5rmv44Gu5bed44OX44Oq44Oz44K544Ob44OG44Or5ria5Lqt!3m2!1d41.774474999999995!2d140.78425959999998!4m5!1s0x5f9ef2558c0649a9%3A0x3aa277addb8f3ebe!2z5YyX5rW36YGT5Ye96aSo5biCIOWHvemkqOWxsQ!3m2!1d41.7592941!2d140.703917!5e0!3m2!1sja!2sjp!4v1594521117938!5m2!1sja!2sjp" width="50%" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
                <Date
                    map="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d753208.3488372!2d140.40042451981506!3d42.486872913941575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x5f9ef497034e4f6f%3A0xa513358c633a172b!2z5rmv44Gu5bed44OX44Oq44Oz44K544Ob44OG44Or5ria5Lqt!3m2!1d41.774474999999995!2d140.78425959999998!4m5!1s0x5f7566c6b76dfe87%3A0x93d2542b80facafc!2z44Gu44G844KK44G544Gk44Kv44Oe54mn5aC0!3m2!1d42.492857!2d141.1445305!4m5!1s0x5f751388bf7ab8ed%3A0x809bfb3fb009c57a!2z44KJ44O844KB44KT5qW15pys5bqX!3m2!1d42.6041794!2d141.4954166!4m5!1s0x5f752083e2c1e6e3%3A0x7c82a0832293a671!2z5Y2X5Y2D5q2z6aeF!3m2!1d42.8082771!2d141.6751879!4m5!1s0x5f0ae04d246170e1%3A0xcde965c5a0dafcd4!2z5bCP5qi96YGL5rKz!3m2!1d43.1979638!2d141.0031005!4m5!1s0x5f0b298f1589912f%3A0x3b2c108019c5ea05!2z44OX44Os44Of44Ki44Ob44OG44OrLUNBQklOLeacreW5jA!3m2!1d43.0531104!2d141.3476736!5e0!3m2!1sja!2sjp!4v1594547878832!5m2!1sja!2sjp"
                    schedules={schedules.day23}
                    date="7/23"
                    lodgingUrl="https://www.jalan.net/yad313982/?contHideFlg=1&ccnt=yado_reservelist_yado&chkin_date=20200723&chkin_child_num=0&chkin_adult_num=3"
                    lodgingName="天然温泉プレミアホテル-CABIN-札幌"
                    spots="観光スポット" />

                <Date
                    map="https://www.google.com/maps/embed?pb=!1m52!1m12!1m3!1d1464167.2400868747!2d140.8596646711936!3d44.21321099386911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m37!3e0!4m5!1s0x5f0b298f1589912f%3A0x3b2c108019c5ea05!2z44CSMDY0LTA4MDUg5YyX5rW36YGT5pyt5bmM5biC5Lit5aSu5Yy65Y2X77yV5p2h6KW_77yX5LiB55uuIOODl-ODrOODn-OCouODm-ODhuODqy1DQUJJTi3mnK3luYw!3m2!1d43.0531104!2d141.3476736!4m5!1s0x5f0cb4ca2191b001%3A0x1b5ef6da25b84694!2z44OV44Kh44O844Og5a-M55Sw44Op44OZ44Oz44OA44O844Kk44O844K544OI44CB44CSMDcxLTA1MjYg5YyX5rW36YGT56m655-l6YOh5LiK5a-M6Imv6YeO55S65p2x77yW57ea5YyX77yR77yW5Y-3!3m2!1d43.4065004!2d142.4679816!4m5!1s0x5f0ccc62de222a6f%3A0x4cd181f9f4b779e!2z5YyX5rW36YGT576O55Gb55S65a2X55m96YeRIOmdkuOBhOaxoA!3m2!1d43.4934978!2d142.6141265!4m5!1s0x5f0ce0ccb5e023cb%3A0xc825dcbd1da853d3!2z5pet5bed5biC5pet5bGx5YuV54mp5ZyS44CB44CSMDc4LTgyMDUg5YyX5rW36YGT5pet5bed5biC5p2x5pet5bed55S65YCJ5rK8!3m2!1d43.7684103!2d142.480038!4m5!1s0x5f0c98d6f215d66f%3A0xc3e20a564619bf35!2z5YyX5rW36YGT5rud5bed5biC5qCE55S677yU5LiB55uu77yZIOa7neW3nemnhQ!3m2!1d43.5551702!2d141.9012445!4m5!1s0x5f1024bf33c2d399%3A0x9c19d02dc3de7421!2z44CSMDk3LTAwMDQg5YyX5rW36YGT56ia5YaF5biC57eR77yV5LiB55uu77yR77yZ4oiS77yZ!3m2!1d45.382338999999995!2d141.67403539999998!5e0!3m2!1sja!2sjp!4v1594523134926!5m2!1sja!2sjp"
                    schedules={schedules.day24}
                    date="7/24"
                    lodgingUrl="https://goo.gl/maps/tfz7XeqgjcGnqNcz7"
                    lodgingName="松嶋家"
                    spots="観光スポット" />
                <Date
                    // map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.338654853042!2d141.67184671551217!3d45.38233897910002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f1024bf33c2d399%3A0x9c19d02dc3de7421!2z44CSMDk3LTAwMDQg5YyX5rW36YGT56ia5YaF5biC57eR77yV5LiB55uu77yR77yZ4oiS77yZ!5e0!3m2!1sja!2sjp!4v1594525552194!5m2!1sja!2sjp"
                    schedules={schedules.day25}
                    date="7/25"
                    lodgingUrl="https://goo.gl/maps/tfz7XeqgjcGnqNcz7"
                    lodgingName="松嶋家"
                    spots="観光スポット" />
                <Date
                    // map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.338654853042!2d141.67184671551217!3d45.38233897910002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f1024bf33c2d399%3A0x9c19d02dc3de7421!2z44CSMDk3LTAwMDQg5YyX5rW36YGT56ia5YaF5biC57eR77yV5LiB55uu77yR77yZ4oiS77yZ!5e0!3m2!1sja!2sjp!4v1594525552194!5m2!1sja!2sjp"
                    schedules={schedules.day26}
                    date="7/26"
                    lodgingUrl="https://goo.gl/maps/tfz7XeqgjcGnqNcz7"
                    lodgingName="松嶋家"
                    spots="観光スポット" />
                <Date
                    // map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.338654853042!2d141.67184671551217!3d45.38233897910002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f1024bf33c2d399%3A0x9c19d02dc3de7421!2z44CSMDk3LTAwMDQg5YyX5rW36YGT56ia5YaF5biC57eR77yV5LiB55uu77yR77yZ4oiS77yZ!5e0!3m2!1sja!2sjp!4v1594525552194!5m2!1sja!2sjp"
                    schedules={schedules.day27}
                    date="7/27"
                    lodgingUrl="https://goo.gl/maps/tfz7XeqgjcGnqNcz7"
                    lodgingName="松嶋家"
                    spots="観光スポット" />
                <Date
                    // map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.338654853042!2d141.67184671551217!3d45.38233897910002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f1024bf33c2d399%3A0x9c19d02dc3de7421!2z44CSMDk3LTAwMDQg5YyX5rW36YGT56ia5YaF5biC57eR77yV5LiB55uu77yR77yZ4oiS77yZ!5e0!3m2!1sja!2sjp!4v1594525552194!5m2!1sja!2sjp"
                    schedules={schedules.day28}
                    date="7/28"
                    lodgingUrl="https://goo.gl/maps/tfz7XeqgjcGnqNcz7"
                    lodgingName="松嶋家"
                    spots="観光スポット" />
                <Date
                    map="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d44829.03961469605!2d141.6998209357574!3d45.3929030495007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x5f1024bf33c2d399%3A0x9c19d02dc3de7421!2z44CSMDk3LTAwMDQg5YyX5rW36YGT56ia5YaF5biC57eR77yV5LiB55uu77yR77yZ4oiS77yZ!3m2!1d45.382338999999995!2d141.67403539999998!4m5!1s0x5f103a315a1b62f9%3A0x87f3f4b795bb09d!2z56ia5YaF56m65riv44CB44CSMDk4LTY2NDIg5YyX5rW36YGT56ia5YaF5biC5aSn5a2X5aOw5ZWP5p2R5aOw5ZWP77yW77yX77yU77yU!3m2!1d45.399659299999996!2d141.7973887!5e0!3m2!1sja!2sjp!4v1594525648848!5m2!1sja!2sjp"
                    schedules={schedules.day29}
                    date="7/29"
                    lodgingUrl="https://goo.gl/maps/Fr87TNZFpQLHqG926"
                    lodgingName="やまなし"
                    spots="観光スポット" />
            </div>


        </div>
    )
}