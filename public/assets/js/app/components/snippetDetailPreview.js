import React, { Component, PropTypes } from 'react';

export default class SnippetDetailPreview extends Component {


  render() {
    const previewHtml = this.props.preview;

    return (
      <div className="snippet-form-body-preview-panel" id="snippet-preview" dangerouslySetInnerHTML={{__html: previewHtml}}></div>
    );
  }
}

SnippetDetailPreview.propTypes = {
  preview: PropTypes.string.isRequired
};
