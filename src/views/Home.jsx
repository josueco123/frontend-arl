import '../App.css';
import SearchFlies from '../components/SearchFlies';
import { Layout, Card, Col, Row } from "antd";
import ImageHeader from '../components/ImageHeader';
const { Content, Footer } = Layout;

function Home() {
    return (
        <Layout className="layout">
            <ImageHeader />
            <Content>
                <SearchFlies />
                <div style={{ margin: '40px' }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card
                                cover={<img alt="example" src="https://www.youbloom.com/app/uploads/2015/10/los-angeles-979401_1920.jpg" />}
                                bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                cover={<img alt="example" src="https://www.youbloom.com/app/uploads/2015/10/los-angeles-979401_1920.jpg" />}
                                bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                cover={<img alt="example" src="https://www.youbloom.com/app/uploads/2015/10/los-angeles-979401_1920.jpg" />}
                                bordered={false}>
                                Card content
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Created by Josue Hurtado
            </Footer>
        </Layout>
    );
};

export default Home;