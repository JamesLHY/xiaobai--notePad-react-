import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const CategoryWrapper = styled.div`
background: white;
`;
const Item = styled.div`
display: flex;
justify-content: space-between;
background: white;
font-size: 18px;
line-height: 20px;
padding: 10px 16px;
 > .notes{
 margin-right: auto;
 margin-left: 16px;
 color: #999;
 }
`;

function Statistics() {
    const [category, setCategory] = useState<'-' | '+'>('-');
    const {records} = useRecords();
    const {getName} = useTags();
    return (
        <Layout>
            <h2>统计页面</h2>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            <div>
                {records.map(r => {
                    return <Item>
                        <div className="tags">
                            {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                        </div>
                        <div className="notes">
                            {r.note}
                        </div>
                        <div className="amount">
                            ￥{r.amount}
                        </div>
                        {/*{day(r.createAt).format('YYYY MM DD')}*/}
                    </Item>;
                })}
            </div>
        </Layout>
    );
}

export default Statistics;