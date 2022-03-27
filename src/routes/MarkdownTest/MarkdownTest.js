import React from 'react';
import './MarkdownTest.css';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Component} from "react";

const loadpath = '/markdowntest/markdown-test.md'

class MarkdownTest extends Component {
    constructor(props) {
        super(props);
        this.state = {markdown: ''}
    }

    componentDidMount() {
        fetch(loadpath)
            .then(response => response.text())
            .then(text => this.setState({markdown: text}))
    }

    render() {
        return (
            <div className="MarkdownTest">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{this.state.markdown}</ReactMarkdown>
            </div>
        )
    }
}

export default MarkdownTest;
