import './bulletinBoard.css';

function BulletinBoard() {
  return (
    <>
    <div>
      <h1 className='title'>PHPで掲示板アプリ</h1>
      <hr />

      <div className='board-wrapper'>
        {/* 書き込んだ内容を表示 */}
        <section>
          <article>
            <div className='wrapper'>
              <div className='name-area'>
                <span>名前：</span>
                <p className='username'>yuuki</p>
                <time datetime="">:2024/5/12</time>
              </div>
              <p className='comment'>コメント</p>
            </div>
          </article>
        </section>

        {/* 書き込みフォーム */}
        <form className='form-wrapper'>
          <div>
            <input type="submit" value="書き込む" />
            <label htmlFor="">名前：</label>
            <input type="text" name="username" />
          </div>

          <div>
            <textarea className='comment-text-area'></textarea>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default BulletinBoard;