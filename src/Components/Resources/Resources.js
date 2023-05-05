import React from 'react'
import { Row, Container, Card } from 'react-bootstrap';

const Resources = () => {
  return (
    <div className='mb-5' id="action4">
      <Container>
        <br></br>
        <h3 className='text-center mb-3'><b>Helpful Resources</b></h3>
        <Row>
            <Card className='shadow-lg rounded mb-3'>
                <Card.Body>
                <ul>
                    <li>COVID-19 Stance Detection Paper - <a href="https://par.nsf.gov/servlets/purl/10308843">Click Here</a></li>
                    <li>GPTZero - <a href="https://github.com/BurhanUlTayyab/GPTZero">Click Here</a></li>
                    <li>ClimateChange.ai - <a href="https://www.climatechange.ai/">Click Here</a></li>
                    <li>Summary of ChatGPT/GPT-4 Research and Perspective Towards the Future of Large Language Models Paper - <a href="https://arxiv.org/abs/2304.01852">Click Here</a></li>
                    <li>Koala Model - <a href="https://bair.berkeley.edu/blog/2023/04/03/koala/">Click Here</a></li>
                    <li>OpenAI's Example with a Webpage Dialog Box using the Flask Framework - <a href="https://github.com/openai/openai-quickstart-python">Click Here</a></li>
                    <li>StackLLaMA - <a href="https://huggingface.co/blog/stackllama">Click Here</a></li>
                    <li>FastChat - <a href="https://github.com/lm-sys/FastChat">Click Here</a></li>
                    <li>Vicuna - <a href="https://vicuna.lmsys.org/">Click Here</a></li>
                    <li>HuggingChat - <a href="https://huggingface.co/chat/">Click Here</a></li>
                    <li>Heroku - <a href="https://www.heroku.com/">Click Here</a></li>
                </ul>
                </Card.Body>
                </Card>
        </Row>
      </Container>
    </div>
  )
}

export default Resources