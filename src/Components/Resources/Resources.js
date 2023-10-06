import React from 'react'
import { Row, Container, Card } from 'react-bootstrap';

const Resources = () => {
  return (
    <div className='mb-5' id="action4">
      <Container>
        <br></br>
        <h3 className='mb-3'><b className='garmond'>Helpful Resource</b></h3>
        <Row>
          {/* <Card className='shadow-lg rounded mb-3'>
            <Card.Body> */}
          <ul style={{ listStyleType: "none" }}>
            <li><a className='csueb_red' href="https://par.nsf.gov/servlets/purl/10308843">COVID-19 Stance Detection Paper  </a></li>
            <li><a className='csueb_red' href="https://github.com/BurhanUlTayyab/GPTZero">GPTZero  </a></li>
            <li><a className='csueb_red' href="https://www.climatechange.ai/">ClimateChange.ai  </a></li>
            <li><a className='csueb_red' href="https://arxiv.org/abs/2304.01852">Summary of ChatGPT/GPT-4 Research and Perspective Towards the Future of Large Language Models Paper  </a></li>
            <li><a className='csueb_red' href="https://bair.berkeley.edu/blog/2023/04/03/koala/">Koala Model  </a></li>
            <li><a className='csueb_red' href="https://github.com/openai/openai-quickstart-python">OpenAI's Example with a Webpage Dialog Box using the Flask Framework  </a></li>
            <li><a className='csueb_red' href="https://huggingface.co/blog/stackllama">StackLLaMA  </a></li>
            <li><a className='csueb_red' href="https://github.com/lm-sys/FastChat">FastChat  </a></li>
            <li><a className='csueb_red' href="https://vicuna.lmsys.org/">Vicuna  </a></li>
            <li><a className='csueb_red' href="https://huggingface.co/chat/">HuggingChat  </a></li>
            <li><a className='csueb_red' href="https://www.heroku.com/">Heroku  </a></li>
          </ul>
          {/* </Card.Body>
          </Card> */}
        </Row>
      </Container>
    </div>
  )
}

export default Resources