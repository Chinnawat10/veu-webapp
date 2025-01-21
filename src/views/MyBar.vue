<template>
  <nav class="navbar">
    <div class="wrapper">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/Rog.png" alt="Logo" />
        </router-link>
      </div>
      <ul class="nav-links">
        <label for="close-btn" class="btn close-btn">
          <i class="fas fa-times"></i>
        </label>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">MyCard</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
  name: "MyBar",
  data() {
    return {
      logo,
    };
  },
};
</script>

<style scoped>
/* สไตล์สำหรับ Navbar */
.navbar {
  background-color: #494949; /* สีพื้นหลังของ Navbar */
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.5);
  position: sticky; /* ให้ Navbar ติดอยู่ด้านบน */
  top: 0;
  z-index: 1000;
}

.logo img {
  height: 50px;
  width: auto;
  cursor: pointer;
filter: grayscale(100%); /* ทำให้โลโก้เป็นโทนขาวดำ */
  transition: transform 0.3s ease, filter 0.1s ease; /* เพิ่มการเคลื่อนไหว */
}

.logo img:hover {
  
 
transform: translateY(-5px) scale(1.1); /* ขยับขึ้นและขยายเล็กน้อยเมื่อโฮเวอร์ */
  filter: grayscale(0%); /* ทำให้โลโก้เป็นสีเต็ม */
}
/* สไตล์สำหรับ ul และ nav links */
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  font-size: 1rem;
}

.nav-links a {
  text-decoration: none;
  color: #ececec; /* สีขาวเท่ๆ */
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-links a:hover {
  background-color: #d6d4d4; /* สีขาวล้วน */
  color: #1a1a1a; /* สีดำ */
  transform: scale(1.1);
}

/* สำหรับปุ่ม close-btn (ถ้าใช้งาน) */
.btn {
  display: none; /* ซ่อนปุ่มหากไม่ได้ใช้งาน */
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column;
    background-color: #4b4848; /* สีพื้นหลังดำเข้ม */
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    display: none; /* เริ่มต้นซ่อน */
  }

  .nav-links.active {
    display: flex; /* แสดงเมนูเมื่อ active */
  }

  .btn {
    display: block;
    font-size: 2rem;
    color: #242323; /* สีขาว */
    cursor: pointer;
  }

  .close-btn {
    align-self: flex-end;
    margin-right: 20px;
  }
}
</style>
