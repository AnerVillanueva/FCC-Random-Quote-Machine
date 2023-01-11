function App(){

  const [quotes, setQuotes] = React.useState([]);
  const [randomQuote, setRandomQuote] = React.useState("");
	const [color, setColor] = React.useState("#000")

  React.useEffect(() => {
    async function fetchData(){
      const response = await fetch("https://type.fit/api/quotes")
      const data = await response.json()
            
      setQuotes(data);
      let randIndex = Math.floor(Math.random() * data.length);
      setRandomQuote(data[randIndex])
    }
    fetchData();
  }, [])
    
  const getNewQuote = () => {

		const colors = [
			'#16a085',
  		'#27ae60',
  		'#2c3e50',
  		'#f39c12',
  		'#e74c3c',
  		'#9b59b6',
			'#FB6964',
			'#342224',
			'#472E32',
			'#BDBB99',
			'#77B1A9',
			'#73A857'
		];

    let randIndex = Math.floor(Math.random() * quotes.length);
		let randColorIndex = Math.floor(Math.random() * colors.length);
    setRandomQuote(quotes[randIndex])
		setColor(colors[randColorIndex])
  }


  return(
		<div className="content" style={{backgroundColor: color, minHeight:"100vh", color: color}}>
			<div className="container pt-5">
				<div className="junbotron">
					<div className="card">
						<div className="card-header"> Random Quotes </div>
							<div id="quote-box" className="card-body">
								{randomQuote ? (
									<>
									<p id="text" className="card-text">&quot;{randomQuote.text}&quot;</p>
									<h5 id="author" className="card-title">- {randomQuote.author || "No author"}</h5>
									</>
									) : (
									<h2>Loading</h2>
									)}

								<div className="column pt-2">
									<a id="tweet-quote" href={
										"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
										encodeURIComponent(
											'"' + randomQuote.text + '" ' + randomQuote.author
											)
										}
											target="_blank" className="btn btn-secondary" style={{backgroundColor: color}}s>
										<i className="fa fa-twitter"></i>
									</a>
									<a id="tumblr-quote" href={
										"https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
										encodeURIComponent(randomQuote.author) +
										"&content=" + 
										encodeURIComponent(randomQuote.text) +
										"&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
									}
															
											target="_blank" className="btn btn-secondary" style={{backgroundColor: color}}>
											<i className="fa fa-tumblr"></i>
									</a>
									<br/>
									<button id="new-quote" onClick={getNewQuote} className="btn btn-secondary ml-2" style={{backgroundColor: color}}> Next Quote </button>
								</div>
							</div>
					</div>
				</div>
			</div>
		</div>
);
}

ReactDOM.render(<App/>, document.getElementById("app")) 