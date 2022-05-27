import * as React from 'react';
import { Link } from "react-router-dom";
import classes from './Faq.module.scss';
import classNames from "classnames";

const faqItems = [
  {
    question: "What is SockBot?",
    answer: "d;lkf;kjwfk;jjk;d;"
  },
  {
    question: "Will there be a public sale?",
    answer: "55"
  },
  {
    question: "Will there be a Welcome List?",
    answer: "55"
  },
  {
    question: "When will information be shared about the launch?",
    answer: "55"
  },
  {
    question: "Who are the team behind SockBot?",
    answer: "55"
  },
]

const Faq = () => {
// ***** Finish Formatting This Section **** //
  return (
    <div className = {classes.faq_wrapper}>
      <div className = {classes.faq_content}>

        <h2>FAQ</h2>

        {faqItems.map(item => (
          <p>{item.question}</p>
        ))}

      </div>
    </div>
  )
}

export default Faq
