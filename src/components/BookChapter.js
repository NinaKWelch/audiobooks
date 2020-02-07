import React from 'react'
import PropTypes from 'prop-types'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Box,
  Typography
} from '@material-ui/core'
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons'
import BookSection from './BookSection'

const BookChapter = ({ chapter, expanded, handleChange, handleAudio }) => {
  const panelId = `panel_${chapter.number}`

  return (
    <ExpansionPanel
      expanded={expanded === panelId}
      onChange={handleChange(panelId)}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5" id={chapter.number}>{chapter.number}. {chapter.title}</Typography>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        <div>
          {chapter.initial ? (
            <Box maxWidth={chapter.initial.width} mr={1} clone>
              <img
                src={chapter.initial.illustration}
                alt={chapter.initial.letter}
                style={{ float: `${chapter.initial.position}` }}
              />
            </Box>
          ) : (
            ''
          )}

          {chapter.sections.map(section => (
            <BookSection
              key={section.number}
              section={section}
              handleAudio={handleAudio}
            />
          ))}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

BookChapter.propTypes = {
  chapter: PropTypes.shape({
    number: PropTypes.number,
    title: PropTypes.string.isRequired,
    initial: PropTypes.shape({
      width: PropTypes.number,
      illustration: PropTypes.string,
      letter: PropTypes.string,
      position: PropTypes.string
    }),
    sections: PropTypes.array
  }).isRequired,
  expanded: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAudio: PropTypes.func.isRequired
}

export default BookChapter
