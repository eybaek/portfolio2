import Head from 'next/head'

export default function Home() {
  return (
    <div className="page">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className='section'>
        <div className='masthead-image' id='master-container'>
            <div className='content center'>
                <h1 id='master'>
                  <div>안녕하세요</div>
                  <div id='master-container-scroller'>
                    <div className='master-container-scroller_item'>
                      <a className='cta-link' href='#'>백은영 입니다</a>.
                    </div>
                    <div className='master-container-scroller_item'>
                      <a className='cta-link' href='#'>35살 입니다</a>.
                    </div>
                    <div className='master-container-scroller_item'>
                      <a className='cta-link' href='#'>Web frontend Engineer 입니다</a>.
                    </div>
                    <div className='master-container-scroller_item'>
                      <a className='cta-link' href='#'>Web을 좋아합니다</a>.
                    </div>
                    <div className='master-container-scroller_item'>
                      <a className='cta-link' href='#'>독서를 좋아합니다</a>.
                    </div>
                    <div className='master-container-scroller_item'>
                      <a className='cta-link' href='#'>운동을 좋아합니다</a>.
                    </div>
                    <div className='master-container-scroller_item'>
                      <a className='cta-link' href='#'>여행을 좋아합니다</a>.
                    </div>
                    <div className='master-container-scroller_item'>
                      <a className='cta-link' href='#'>호기심이 많은 아이입니다</a>.
                    </div>
                    <div className='master-container-scroller_item'>
                      <a className='cta-link' href='#'>도전을 좋아합니다</a>.
                    </div>
                    <div className='master-container-scroller_item'>백은영 입니다.</div>
                  </div>
                  <div>반갑습니다</div>
                </h1>
            </div>
        </div>
    </section>
      </main>
    </div>
  )
}