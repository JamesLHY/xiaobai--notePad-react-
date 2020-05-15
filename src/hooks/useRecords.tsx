import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';
type newRecordItem = {
    tagIds: number[]
    note: string
    category: '+' | '-'
    amount: number
}
type RecordItem =newRecordItem & {
    createAt: string
}

const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
    }, []);
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, [records]);
    const addRecord = (newRecord: newRecordItem) => {
        const record = {...newRecord, createAt: (new Date()).toISOString()};
        setRecords([...records, record]);
    };

    return {records, addRecord};
};

export {useRecords};