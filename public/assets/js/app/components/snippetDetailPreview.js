import React, { Component, PropTypes } from 'react';

export default class SnippetDetailPreview extends Component {


  render() {
    const previewHtml = this.props.preview;

    return (
      <div id="markdown-preview" dangerouslySetInnerHTML={{__html: previewHtml}}></div>
    );
  }
}

SnippetDetailPreview.propTypes = {
  preview: PropTypes.string.isRequired
};
