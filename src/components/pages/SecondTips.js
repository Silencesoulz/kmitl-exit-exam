import React from 'react'
import '../style/SecondTIps.css'
import { Image } from "@chakra-ui/react"
import { List, ListItem} from "@chakra-ui/react"
import { CheckCircleIcon } from '@chakra-ui/icons'

function SecondTips() {
    return (
        <div className='textfortips'>
            <br />
            <br />
            <h1>GET TO KNOW KMITL EXIT EXAM! </h1>
            <br />
            <br />
            <p>&nbsp;&nbsp;&nbsp;คือการสอบวัดความรู้ทักษะภาษาอังกฤษก่อนสำเร็จการศึกษา
                นักศึกษาวิศวกรรมศาสตร์ รหัส 60 เป็นต้นไป (ยกเว้นนักศึกษาหลักสูตรนานาชาติ)
                ต้องสอบ Exit Exam ผ่านเกณฑ์ 40% หรือส่งผลคะแนนสอบเทียบเท่า (Exempt)
                ระดับ CEFR B1+ โดยเมื่อยื่นผลสอบ Exit Exam หรือส่งผลสอบเทียบเท่าแล้ว การยื่นคะแนนนั้นจะมีอายุ 2 ปี เพื่อเป็นไปตามมาตราฐานการใช้ภาษาอังกฤษ
                ของนักศึกษาที่เรียนจบจากสถาบันฯ จะต้องสอบผ่าน (ได้ผลเป็น S) หรือยื่นผลคะแนนเทียบเท่า
                เพื่อเป็นส่วนหนึ่งของการของสำเร็จการศึกษา
            </p>
            <br/>
            <br/>
            <List spacing={5} className="listposition">
                <ListItem>
                    <CheckCircleIcon color="green.500" />
                &nbsp;&nbsp;สอบ Exit Exam ผ่านเกณฑ์ 40% ต้องได้มากกว่า 32 คะแนน (คะแนนเต็ม 80)
                </ListItem>
                <ListItem>
                    <CheckCircleIcon color="green.500" />
                    &nbsp;&nbsp;สามารถส่งผลคะแนนสอบเทียบเท่า ตามรายการที่แสดงในหน้าหลัก
                </ListItem>
                <ListItem>
                    <CheckCircleIcon color="green.500" />
                    &nbsp;&nbsp;สอบได้ตั้งแต่ก่อนเรียนจบ 2 ปี น.ศ.ปี 3 สามารถเริ่มวางแผนการสอบได้เลย!
                </ListItem>
                <ListItem>
                    <CheckCircleIcon color="green.500" />
                    &nbsp;&nbsp;สอบครั้งแรก ฟรี! แต่หากสอบไม่ผ่าน จะต้องชำระค่าสมัครสอบครั้งละ 220.- บาทด้วยตนเอง
                    (สมัครผ่านระบบสำนักทะเบียนด้วยตนเองได้เลย)
                </ListItem>
                <ListItem>
                    <CheckCircleIcon color="green.500" />
                    &nbsp;&nbsp;เป็นเนื้อหาวิชา Foundation English 1-2 
                </ListItem>
            </List>
            <br />
            <br />
            <br />
            <br />
            <div align="center">
                <Image
                    objectFit="cover"
                    src="images/kexitexamdet.jpeg"
                    alt="Detail"
                />
            <br />
         
            </div>
            <br />
            <br />
            <hr className="hrposition" />
            <br /><br />

        </div>

    )
}

export default SecondTips
