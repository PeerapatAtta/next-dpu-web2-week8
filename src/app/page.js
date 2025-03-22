import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>ยินดีต้อนรับเข้าสู่เว็บไซต์ของเรา</h2>
      <Link href="/about">ไปยังหน้าเกี่ยวกับเรา</Link>
    </div>
  );
}
