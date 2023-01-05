import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}  src="https://scontent.flad7-1.fna.fbcdn.net/v/t39.30808-6/321656061_1221534048717392_7895103419140695016_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeEjxnyRRy7M_Vk1DUWkAnzqXhtAnU4IX0NeG0CdTghfQzxaLM598iSSREUJO2lNkBG_fUO8Cu1lDCaS_ja85ioB&_nc_ohc=0TxmMcpUWqAAX9gk1iN&_nc_ht=scontent.flad7-1.fna&oh=00_AfBtfcw-UG2WaiILeQpnH4aBjzeHjX6UHUol_7RTSdZl5w&oe=63B8DEBE" />

      <div className={styles.profile}>
      <Avatar src="https://scontent.flad7-1.fna.fbcdn.net/v/t39.30808-6/286874459_742601143412971_8812238341895614350_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGSLqaOqlhLkBZhKI9rncY-V3yKJQ4bvyJXfIolDhu_ItJTlLi_NBhWHbF0xThGR9VzMMEmgoMzpncq52wx_WeB&_nc_ohc=UcZj8VFkduEAX9mghHM&tn=GX3pGuBVwLU6mpeG&_nc_ht=scontent.flad7-1.fna&oh=00_AfCZ8L1XQJ0yoANLqz9qglgqz5yuAuASFGIIXD2r-4VpmA&oe=63B8DD13" />
        <strong>Caio Teca</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}