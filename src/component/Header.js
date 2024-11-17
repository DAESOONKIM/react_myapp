export default function Header(){
    return (
        <div className="Header">
            <h1>
                <a href="/">토익 영단어 고급</a>
            </h1>                
            <div className="menu">
                <button href="/#x" className="link">단어 추가</button>
                <button href="/#x" className="link">Day 추가</button>
            </div>
        </div>
    );
}