import React from 'react'
import Container from '../Container'
import Zooko from './zooko.png'
import '../Quote/Quote.scss'

function Quote() {
  return (
    <Container>
      <div className="Section-space-top Section-space-bottom text-center d-flex justify-content-center">
        <div className="w-75">
          <p className="Quote-info-text text-gradient">
            “lifeDeFied is the first DeFi Security Platform to offer stable tokenization, cold storage 3 Factor authentication, data soveriegnty, micro-staking,  "
          </p>
          <div className="pt-4">
            <img src={Zooko} alt="Zooko Wilcox-O'Hearn" width="80" height="80" />
          </div>
          <div className="pt-4">
            <img src={Zooko} alt="Zooko Wilcox-O'Hearn" width="80" height="80" />
          </div>
          <p className="Quote-author-text pt-4">
            Keaton McCune
          </p>
          <span className="Quote-author-info">
            Founder, Co-CEO, Head of Security
          </span>
        </div>
      </div>
    </Container>
  )
}

export default Quote
