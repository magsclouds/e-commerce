import React, { Component } from 'react';


export default class About extends Component{
    render(){
        return(
            <div>
                 <div style={styles.grid}>
                    <div>
                        <p className='title'><span>about</span> <span>light</span></p>
                    </div>
                    <div>
                        <p>
                        Rassam was an archaeological colleague of Austen Henry Layard who assisted him in discovering the Great Library of Ashurbanipal in 1840. Rassam was a talented field archaeologist ad was frustrated knowing that there was more to find in the North Palace excavation area of Nineveh (the Great Library). When George waltzed into Nineveh in 1873 and began digging straightaway in his old excavation trench, Rassam was furious. Doubly so when he heard of the new tablets that had been discovered and George's heroes welcome back in England.
                        </p>
                    </div>
                </div>
                <div>
                    <p>Rassam was right to be angry, for he had been wronged. “Matters were made worse when Hormuzd Rassam, the site’s first excavator, appeared in Mosul during this time. Rassam agreed to advise the pasha on a fair division of the finds. He and Smith had been on cool terms for some time, with Rassam regarding himself as the seasoned excavator and Smith as an amateur at fieldwork. Rassam had been disappointed that the Daily Telegraph editor had sent Smith to find the balance of the Flood story in Rassam’s old trenches. Smith was enjoying his sudden, newspaper-driven fame as a prominent archaeologist and explorer, and felt he had every right to press his opportunities to the fullest.” Layard and the Pasha manipulated Rassam like a pawn (just like George). Growing up literally on top of the archaeological mounds of Nineveh, it was Rassam's talents and instincts that led them to the North Palace excavation area in the first place; yet, Layard received all the credit. Although he plays an antagonistic role, Rassam is ultimately a victim of the same forces as George.</p>
                </div>
                    <div style={styles.box}>
                    <iframe src="https://player.vimeo.com/video/270454241" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                </div>
                <div>
                    <p>He had seen everything, experienced everything. He was granted vision into the mysteries of the deep, the secret places, the time before the Great Flood. He journeyed to the edge of the world, returning back to us broken but whole.</p>
                </div>
                    <hr style={styles.line_break}/>
                <div>
                    <p style={styles.delivery}>DELIVERY INFORMATION</p>
                    <div style={styles.grid_delivery}>
                        <div>
                            <p>SUPERSONIC</p>
                            <p>Between George's first and second expeditions to Iraq, a new Pasha had been installed in
Baghdad, and unlike his predecessor, took a strong and suspicious interest in Smith’s work – a
suspicion only increased, to George's surprise, by familiarity with European culture. The Pasha
was emboldened after learning that George was not, in fact, an agent of the British government
at all but only a newspaper correspondent. After his identity was revealed, George wrote in
fear: "he might do as he liked with me.”</p>
                        </div>
                        <div>
                            <p>SPEED OF LIGHT</p>
                            <p>December 1853, Ancient Ruins of Nineveh. Archaeological mounds outside of Mosul, northern
Iraq. Unbeknownst to them, Austin Henry Layard and Hormuzd Rassam stand atop the ruins of
ancient Nineveh. They have just discovered the Great Library of Ashurbanipal. Among the
30,000 tablets included in their excavations is Tablet XI of the Epic of Gilgamesh. The tablets are
shipped back to the British Museum in London, where they are catalogued, stored, and put on
display for the first time in almost three thousand years.</p>
                        </div>
                        <div>
                            <p>BLACK HOLE</p>
                            <p>He had seen everything, experienced everything. He was granted vision into the mysteries of
the deep, the secret places, the time before the Great Flood. He journeyed to the edge of the
world, returning back to us broken but whole.</p>
                        </div>
                    </div>
                </div>

            </div>
           
        )
    }

}
const styles = {
    grid:{
        marginTop: '33px',
        display: 'grid',
        gridGap: '33px',
        gridTemplateColumns: '1fr 2fr',
        width: '100%'
    },
    box:{
        border: 'none',
        marginTop: '53px',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    },
    grid_delivery:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '33px'
    },
    delivery:{
        fontFamily: 'Oswald',
        fontSize: '21px',
        color: '#780315',
        textAlign: 'right',
        letterSpacing: '2px'
    },
    line_break:{
        marginTop: '100px',
        marginBottom: '100px'
    }

}