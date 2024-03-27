import Title from '../Title/Title.tsx';
import Text from '../Text/Text.tsx';

import styles from './About.module.scss';

function About() {
    return (
        <section className={styles.About}>
            <Title
                className={styles.About__Title}
                level="1"
                size="large"
            >
                About
            </Title>
            <Text className={styles.About__Text}>
                This is catalog of NFT/AI/WEB3 products, experimental creative project. Items are independent images with visual categories: liquid, smoke, steel, plastic. I&nbsp;created all images and their names with friendly help of AI. Images are 8K quality for best viewing experience on large screens. You can buy NFTs of some images using "Buy item..." button on their pages. Button will redirect you to items lot on marketplace. If item is not for sale, button will redirect you to userconcept profile. You can view NFTs that are currently available for purchase by filter Currency: ETH. All smart contracts and transactions was executed only in ETH blockchain. Items was created and now stored decentralized, independent of marketplaces. If you want to buy some item, that not for sale - write me. I will resolve this issue. Technical stack of this project based on React ecosystem. Data is fetch in JSON object {'{}'} format, where keys are string identifiers of items with pattern: “category/name”. Values are objects {'{}'} with items data. Catalog is sort by popularity, filter by category and type of currency. “Load more...” button load new elements to catalog. Route of each product page is based on its identifier: “category/name”. HTML {'<picture>'} element load different copys of image, with different resolutions and formats (avif, webp, jpeg), depending of your device, screen, browser, with priority for high quality. Design of project based on Y2K style with elements of skeuomorphism and other trends, like large text in footer, large border radius of elements etc. Project in development status...
            </Text>
        </section>
    );
}

export default About;
