import React, { useState, useEffect } from "react";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // JSON 파일에서 블로그 데이터 불러오기
    fetch("/blog-data.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("블로그 데이터 불러오기 실패:", error);
        setIsLoading(false);
      });
  }, []);

  const handleClick = (linkUrl) => {
    window.open(linkUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#f3ecdc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.blogContainer}>
        <img className={styles.frontImage} src="/front.png" alt="blog" />
        <div className={styles.blogImageContainer}>
          <div className={styles.blogTitle}>
            <span className={styles.blogIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ fontSize: "30px", marginRight: "8px" }}
              >
                <path d="M4 4h16v2H4zm0 4h10v2H4zm0 4h10v2H4z" />
                <circle
                  cx="17"
                  cy="17"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <line
                  x1="20"
                  y1="20"
                  x2="22"
                  y2="22"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span>블로그 보러가기</span>
          </div>

          <div className={styles.reviewsContainer}>
            {isLoading ? (
              <div className={styles.loadingMessage}>로딩 중...</div>
            ) : reviews.length === 0 ? (
              <div className={styles.emptyMessage}>후기가 없습니다.</div>
            ) : (
              reviews.map((review) => (
                <div
                  key={review.id}
                  className={styles.reviewCard}
                  onClick={() => handleClick(review.link)}
                >
                  <div className={styles.reviewCardContent}>
                    <div className={styles.reviewCardHeader}>
                      <div className={styles.authorInfo}>
                        <div className={styles.authorAvatar}>
                          {review.author.charAt(0)}
                        </div>
                        <div className={styles.authorDetails}>
                          <div className={styles.authorName}>{review.author}</div>
                          <div className={styles.reviewDate}>{review.date}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.reviewTitle}>{review.title}</div>
                    <div className={styles.reviewDescription}>
                      {review.description}
                    </div>
                  </div>
                  <img
                    className={styles.reviewCardImage}
                    src={review.thumbnailImage}
                    alt={review.title}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
