import React from 'react'

import EditorComponent from './editor/EditorComponent.js'
import PreviewComponent from './preview/PreviewComponent.js'

export default class BodyComponent extends React.Component {
  render () {
    return (
      <div className='editor-wrapper'>
        <div className='left-side'>
          <EditorComponent editorChanged={this.props.editorChanged} editorValue={this.props.editor.value} />
        </div>
        <div className='right-side'>
          <PreviewComponent value={this.props.editor.value} />
        </div>
      </div>
    )
  }
}
