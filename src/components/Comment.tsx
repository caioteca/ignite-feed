import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  // {props}
  // {props.content}
  const [linkeCount, setLikesCount] = useState(0);

  function handleDeleteComment() {
     
    onDeleteComment(content);
  }

  function handleLikeCount () {
    setLikesCount(linkeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://scontent.flad7-1.fna.fbcdn.net/v/t39.30808-6/286874459_742601143412971_8812238341895614350_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGSLqaOqlhLkBZhKI9rncY-V3yKJQ4bvyJXfIolDhu_ItJTlLi_NBhWHbF0xThGR9VzMMEmgoMzpncq52wx_WeB&_nc_ohc=UcZj8VFkduEAX9mghHM&tn=GX3pGuBVwLU6mpeG&_nc_ht=scontent.flad7-1.fna&oh=00_AfCZ8L1XQJ0yoANLqz9qglgqz5yuAuASFGIIXD2r-4VpmA&oe=63B8DD13" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caio Teca</strong>
              <time title="01 de Janeiro às 8h" dateTime="2023-01-02">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{linkeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
