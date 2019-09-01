import React from 'react'
import { StyledSquare, StyledColourScheme, StyledStyleGuide } from '../components/StyleGuide/StyleGuide.styled';
import { StyledButton, StyledButtonText } from '../components/common/Button.styled';
import { colours } from '../components/styling/colours';
import { StyledHeadingOne, StyledHeadingTwo, StyledHeadingThree, StyledHeadingFour } from '../components/common/Headings.styled';
import { StyledParagraph } from '../components/common/Paragraph.styled';

const StyleGuide: React.FC = () => {
    
    return (
        /* each component
         * ol
         * ul
         * link
         * input
         * textarea
         * recipe card
         * blog card
         * social buttons
         */
        <StyledStyleGuide>
            <StyledHeadingOne>Heading One</StyledHeadingOne>
            <StyledHeadingTwo>Heading Two</StyledHeadingTwo>
            <StyledHeadingThree>Heading Three</StyledHeadingThree>
            <StyledHeadingFour>Heading Four</StyledHeadingFour>

            <StyledHeadingTwo>Primary Colour</StyledHeadingTwo>
            <StyledColourScheme>
                <StyledSquare colour={colours.primary.primaryDark4}></StyledSquare>
                <StyledSquare colour={colours.primary.primaryDark3}></StyledSquare>
                <StyledSquare colour={colours.primary.primaryDark2}></StyledSquare>
                <StyledSquare colour={colours.primary.primaryDark1}></StyledSquare>
                <StyledSquare colour={colours.primary.primary}></StyledSquare>
                <StyledSquare colour={colours.primary.primaryLight1}></StyledSquare>
                <StyledSquare colour={colours.primary.primaryLight2}></StyledSquare>
                <StyledSquare colour={colours.primary.primaryLight3}></StyledSquare>
                <StyledSquare colour={colours.primary.primaryLight4}></StyledSquare>
                
            </StyledColourScheme>
            <StyledHeadingTwo>Accent Colour</StyledHeadingTwo>
            <StyledColourScheme>
                <StyledSquare colour={colours.accent.accentDark4}></StyledSquare>
                <StyledSquare colour={colours.accent.accentDark3}></StyledSquare>
                <StyledSquare colour={colours.accent.accentDark2}></StyledSquare>
                <StyledSquare colour={colours.accent.accentDark1}></StyledSquare>
                <StyledSquare colour={colours.accent.accent}></StyledSquare>
                <StyledSquare colour={colours.accent.accentLight1}></StyledSquare>
                <StyledSquare colour={colours.accent.accentLight2}></StyledSquare>
                <StyledSquare colour={colours.accent.accentLight3}></StyledSquare>
                <StyledSquare colour={colours.accent.accentLight4}></StyledSquare>
            </StyledColourScheme>
            <StyledHeadingTwo>Components</StyledHeadingTwo>
            <div>
                <StyledParagraph>Bacon ipsum dolor amet prosciutto sirloin pork jowl picanha spare ribs turkey tail strip steak capicola filet mignon. Chicken ribeye ground round, landjaeger capicola tri-tip doner pork chuck meatloaf alcatra corned beef shank. Shankle leberkas t-bone meatloaf ground round, andouille cupim prosciutto ham shank drumstick pork chop picanha tri-tip meatball. Bresaola filet mignon cupim alcatra pork. Jowl jerky tenderloin, ham shankle tri-tip turkey t-bone tongue short loin sirloin picanha meatball capicola sausage. Cow pancetta biltong ground round, leberkas alcatra strip steak drumstick short loin fatback porchetta beef shankle prosciutto sirloin.</StyledParagraph>
                <StyledParagraph>Salami buffalo jowl meatloaf rump t-bone, boudin frankfurter doner cow swine bacon turkey andouille. Tri-tip shankle t-bone filet mignon spare ribs porchetta tongue short loin bacon. Kielbasa drumstick ball tip biltong chuck jerky, bresaola pork loin tail boudin strip steak spare ribs. T-bone flank tenderloin, strip steak pork belly shoulder pancetta pastrami. Ground round cow rump shank ribeye landjaeger tenderloin, corned beef beef kielbasa flank bacon t-bone pork belly ham hock.</StyledParagraph>
                <StyledParagraph>Meatball cow short ribs frankfurter, pork loin turkey biltong sirloin beef ribs venison sausage bacon beef. Salami tail leberkas turducken, chicken hamburger capicola sausage. Picanha meatball pig alcatra andouille meatloaf turducken pork loin short loin chuck ground round chicken pancetta. Brisket tongue ball tip, burgdoggen sausage buffalo swine meatball.</StyledParagraph>                
            </div>
            <div>
            </div>
            <StyledButton>
                <StyledButtonText>
                    Button Text
                </StyledButtonText>
            </StyledButton>
        </StyledStyleGuide>
    )
}

export default StyleGuide;