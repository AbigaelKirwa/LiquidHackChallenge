import "./MainContent.css"
function MainContent(){
    return(
        <div id="overall_content">
            <h1>Explore to Find Your Perfect Course</h1>
            <div className="content_tags">
                <ul>
                    <li id="accounts"><a href="#accounts"><strong>Accounts &amp; Finance</strong></a></li>
                    <li><a href="#arbitration">Arbitration &amp; Mediation</a></li>
                    <li><a href="#education">Education &amp; Training</a></li>
                    <li><a href="#hr">Human Resources</a></li>
                    <li><a href="#law">Law</a></li>
                    <li><a href="#marketing">Marketing</a></li>
                    <li><a href="#medical">Medical &amp; Health</a></li>
                    <li><a href="#public">Public Relations</a></li>
                    <li><a href="#more">More</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MainContent;