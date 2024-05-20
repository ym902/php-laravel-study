import { useState, useEffect } from 'react';
import './bulletinBoard.css';

function BulletinBoard() {
  // GET fetch
  const [getFetchData, setGetFetchData] = useState([]);
  const apiGetUrl = process.env.REACT_APP_API_GET_URL;

  useEffect(() => {
    fetch(apiGetUrl)
      .then((res) => {
        console.log("resの値", res);
        return res.json();
      })
      .then((data) => {
        console.log("dataの値：", data);
        setGetFetchData(data);
      })
      .catch((error) => {
        console.error('値を取得できませんでした。', error);
      });
  }, []);

  return (
    <>
    <div>
      <h1 className='title'>PHPで掲示板アプリ</h1>
      <hr />

      <div className='board-wrapper'>
        {/* 書き込んだ内容を表示 */}
        <section>
          {getFetchData.map((post, index) => (
            <article key={index}>
              <div className='wrapper'>
                <div className='name-area'>
                  <span>名前：</span>
                  <p className='username'>{post.username}</p>
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <p className='comment'>{post.comment}</p>
              </div>
            </article>
          ))}
        </section>

        {/* 書き込みフォーム */}
        <form className='form-wrapper' method='POST'>
          <div>
            <input type="submit" value="書き込む" name='submitButton' />
            <label htmlFor="">名前：</label>
            <input type="text" name="username" />
          </div>

          <div>
            <textarea className='comment-text-area' name='comment'></textarea>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default BulletinBoard;