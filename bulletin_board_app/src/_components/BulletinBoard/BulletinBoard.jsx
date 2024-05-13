import './bulletinBoard.css';

function BulletinBoard() {
  // <?php
  //   // スーパーグローバル変数 連想配列
  //   echo $_POST["submitButton"]; // value属性が読み込まれる

  //   if(!empty($_POST["submitButton"])) {
  //     // empty に値が入っているときの処理
  //     echo $_POST["username"];
  //     echo $_POST["comment"];
  //   }
  // ?>


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