import { useState, useEffect } from 'react';
import './bulletinBoard.css';

function BulletinBoard() {
  // GET fetch
  const [getFetchData, setGetFetchData] = useState([]);
  const apiGetUrl = process.env.REACT_APP_API_GET_URL;

  const fetchPosts = () => {
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
        console.error('投稿を取得できませんでした。', error);
      });
  }

  // POST fetch
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const apiPostUrl = process.env.REACT_APP_API_POST_URL;

  // コンポーネントが最初に画面表示されたあとに、一度だけデータを読み込む
  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = (event) => {
    // フォーム送信時のページ再読み込みを防止する
    event.preventDefault();

    const postData = { username, comment };
    fetch(apiPostUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      },
      credentials: 'include', // Cookieを送信するために必要
      body: JSON.stringify(postData)
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      console.log("POSTしたときのresの値:", res);
      return res.text();
    })
    .then((text) => {
      console.log("受け取ったテキスト:", text);
      // POST時にフォームに入力した値をクリア
      setUsername('');
      setComment('');
      fetchPosts();
    })
    .catch((error) => {
      console.error('投稿ができませんでした。', error);
    });
  };

  // 日時変換
  const formatDateTime = (isoDateString) => {
    const date = new Date(isoDateString);
    const options = {
      timeZone: "Asia/Tokyo",
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    return new Intl.DateTimeFormat('ja-JP', options).format(date);
  };

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
                  <time dateTime={post.created_at}>{formatDateTime(post.created_at)}</time>
                </div>
                <p className='comment'>{post.comment}</p>
              </div>
            </article>
          ))}
        </section>

        {/* 書き込みフォーム */}
        <form className='form-wrapper' onSubmit={handleSubmit} method='POST'>
          <div>
            <input className='submit-button' type="submit" value="書き込む" name='submitButton' />
            <label htmlFor="">名前：</label>
            <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
          </div>

          <div>
            <textarea className='comment-text-area' name='comment' value={comment} onChange={e => setComment(e.target.value)} ></textarea>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default BulletinBoard;