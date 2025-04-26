import React from 'react'
import {Link} from 'react-router-dom'


function NavBarMenu() {
  return (
    <div>
        <Link to='/'>หน้าหลัก</Link> |
        <Link to='/about'>เกี่ยวกับ</Link> |
        <Link to='/contact'>ติดต่อเรา</Link> |
        <Link to='/sau/service'>บริการ</Link> | 
        <Link to='/wow/show'>ผลิจภัณฑ์</Link> | 
        <hr />

    </div>
  )
}

export default NavBarMenu