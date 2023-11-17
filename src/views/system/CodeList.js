import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getCodeList } from '../../common/utils'
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CFormSelect,
  CFormLabel,
  CFormInput,
  CForm,
  CPagination,
  CPaginationItem,
  CFormSwitch
} from '@coreui/react'

import {
  cilCalendar
} from '@coreui/icons'

const CodeList = () => {
  /**********************************************************************
   * 공통코드 영역
  **********************************************************************/
  const navigate = useNavigate();

  const [midiaCD] = useState(getCodeList('MEDIA')); // 미디어CD
  const [cntryCD] = useState(getCodeList('CNTRY')); // 발매국가CD

  /**********************************************************************
   * 화면 영역
  **********************************************************************/
  const [selectedDate, setSelectedDate] = useState(null); //등록일 from
  const [selectedDate2, setSelectedDate2] = useState(null); // 등록일 to


  //초기화
  const clickReset = date => {

    setCodeSearch({
      "codeStr": ""
    });
  }

  const goFormClick = () => { //등록화면이동
    navigate('/music/albumReg');
  }



  /**********************************************************************
  * 비즈니스로직 영역
 **********************************************************************/
  //마스터 리스트
  const [codeMasterDatas, setCodeMasterDatas] = useState({ contents: [] });

  // 상세 리스트
  const [codeDatas, setCodeDatas] = useState([]);

  // 선텍데이터
  const [selCodeDatas, setSelCodeDatas] = useState({});


  // 테이블 등록
  const [tableReqData, setTableReqData] = useState(
    {
      "numberOfSeats": "",
      "settingYn": false,
      "tableNumber": ""
    }
  );

  //등록 클릭
  const clickTableSong = (e) => {
    e.preventDefault();

    if (!tableReqData.numberOfSeats) {
      alert('테이블 번호를 입력해 주세요.');
      return;
    }

    if (!tableReqData.tableNumber) {
      alert('좌석수를 입력해주세요.');
      return;
    }

    const result = window.confirm('해당 테이블을 등록 하시겠습니까?');

    if (!result) {
      return;
    }

    submitReqTable();

  };

  //곡 등록 하기 API
  const submitReqTable = async () => {

    try {
      const response = await axios.post('http://localhost:8080/api/tables', tableReqData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log('API 응답:', response.data);

      // 폼 데이터를 초기화합니다.
      alert('등록되었습니다.');
      setTableReqData(
        {
          "numberOfSeats": "",
          "settingYn": false,
          "tableNumber": ""
        }
      );

    } catch (error) {
      // API 요청이 실패한 경우 에러를 처리할 수 있습니다.
      console.error('API 요청 실패:', error);
      alert('네트워크 오류 ');
    }

  };


  //검색조건
  const [codeSearch, setCodeSearch] = useState({
    "codeStr": ""
  });

  //조회하기
  const submitSearch = (e) => {
    e.preventDefault();
    submitSearchCodes();
  }

  //페이징
  const clickPage = (e, page) => {
    e.preventDefault();
    codeSearch.page = page;
    submitSearchCodes();
    console.log("===page =  : " + page);
  }

  //검색 API
  const submitSearchCodes = async () => {

    console.log(codeSearch);

    try {
      const response = await axios.get('http://localhost:8080/api/code/search/master', {
        params: codeSearch,
        headers: { 'Content-Type': 'application/json' }
      });

      // API 응답에서 데이터 추출
      const data = response.data;
      // 데이터를 상태 변수에 저장
      setCodeMasterDatas(data);

      console.log(data)

    } catch (error) {
      // API 요청이 실패한 경우 에러를 처리할 수 있습니다.
      console.error('API 요청 실패:', error);
      alert('네트워크 오류 ');
    }

  };

  //코드상세조회
  const showDetailClick = (e, data) => {
    // 페이지 이동 방지
    e.preventDefault();
    console.log(data);

    if (data) {
      setSelCodeDatas(data);
      submitSearchDetailCodes(data.code);
    }
  };

  //검색 API
  const submitSearchDetailCodes = async (code) => {

    console.log(code);
    console.log(selCodeDatas);


    try {
      const response = await axios.get('http://localhost:8080/api/code/search', {
        params: {
          "code": code
        },
        headers: { 'Content-Type': 'application/json' }
      });

      // API 응답에서 데이터 추출
      const data = response.data;
      // 데이터를 상태 변수에 저장
      setCodeDatas(data);

      console.log(data)

    } catch (error) {
      // API 요청이 실패한 경우 에러를 처리할 수 있습니다.
      console.error('API 요청 실패:', error);
      alert('네트워크 오류 ');
    }

  };

  const submitRegAlbum = async (e) => {
    e.preventDefault();

    console.log(codeSearch);

    try {
      const response = await axios.get('http://localhost:8080/api/albums', {
        params: codeSearch
      });

      // API 응답에서 데이터 추출
      const data = response.data;
      // 데이터를 상태 변수에 저장
      setCodeMasterDatas(data);

      console.log(data)

    } catch (error) {
      // API 요청이 실패한 경우 에러를 처리할 수 있습니다.
      console.error('API 요청 실패:', error);
      alert('네트워크 오류 ');
    }

  };

  return (
    <>
      <CRow>
        <CCol>
          <CCard className="mb-4">
            <CCardHeader>코드마스터</CCardHeader>
            <CCardBody>
              <CForm className="row" onSubmit={submitSearch}>
                <CRow className="mb-3">
                  <CCol xs={2}>
                    <CFormLabel htmlFor="inputName" className="col-form-label">코드정보</CFormLabel>
                  </CCol>
                  <CCol xs={10}>
                    <CFormInput type="text" id="inputName" aria-label="코드정보" placeholder="전체" onChange={(e) => setCodeSearch({ ...codeSearch, codeStr: e.target.value })} />
                  </CCol>
                </CRow>
                <div className="d-grid gap-2">
                  <CRow className="justify-content-between">
                    <CCol xs={4}>
                    </CCol>
                    <CCol xs={4}>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <CButton component="input" type="reset" color="light" value="초기화" onClick={clickReset} />
                        <CButton component="input" color="primary" type="submit" value="조회하기" />
                      </div>
                    </CCol>
                  </CRow>
                </div>
              </CForm>
              <br />
              <CTable align="middle" hover>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">No</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">CODE</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">코드설명</CTableHeaderCell>
                    <CTableHeaderCell className="text-center"></CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow v-for="item in tableItems" key="row0" onClick={(e) => showDetailClick(e)}>
                    <CTableDataCell className="text-center">
                      -
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormInput type="text" id="inputTrackNumber" value={tableReqData.numberOfSeats} onChange={(e) => setTableReqData({ ...tableReqData, numberOfSeats: e.target.value })} maxLength={5} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CFormInput type="text" id="inputTrackNumber" value={tableReqData.numberOfSeats} onChange={(e) => setTableReqData({ ...tableReqData, numberOfSeats: e.target.value })} maxLength={5} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <CButton color="info" shape="rounded-pill" className="mb-3" onClick={(e) => clickTableSong(e)}>
                        추가
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                  {codeMasterDatas.contents && codeMasterDatas.contents.length > 0 ? (
                    codeMasterDatas.contents.map((item, index) => (
                      <CTableRow v-for="item in tableItems" key={index} onClick={(e) => showDetailClick(e, item)}>
                        <CTableDataCell className="text-center">
                          <strong>{item.id}</strong>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <CFormInput type="text" id="inputCode" value={item.code} onChange={(e) => setTableReqData({ ...tableReqData, code: e.target.value })} maxLength={30} />
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <CFormInput type="text" id="inputCode" value={item.description} onChange={(e) => setTableReqData({ ...tableReqData, description: e.target.value })} maxLength={30} />
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <CButton color="success" shape="rounded-pill" className="mb-3" onClick={(e) => clickTableSong(e)}>
                            수정
                          </CButton>
                          <CButton color="dark" shape="rounded-pill" className="mb-3" onClick={(e) => clickTableSong(e)}>
                            삭제
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    ))
                  ) :
                    (
                      ''
                    )
                  }
                </CTableBody>
              </CTable>
              <br />
              {codeMasterDatas.contents && codeMasterDatas.contents.length > 0 ? (
                <CRow>
                  <CCol md={{ span: 6, offset: 5 }}>
                    <CPagination aria-label="Page navigation example">
                      <CPaginationItem aria-label="Previous" disabled={!codeMasterDatas.first} onClick={(e) => clickPage(e, 1)}>
                        <span aria-hidden="true">&laquo;</span>
                      </CPaginationItem>
                      {Array.from({ length: codeMasterDatas.totalPages }, (_, index) => (
                        <CPaginationItem key={index} active onClick={(e) => clickPage(e, index + 1)}>{index + 1}</CPaginationItem>
                      ))}
                      <CPaginationItem aria-label="Next" disabled={!codeMasterDatas.last}>
                        <span aria-hidden="true">&raquo;</span>
                      </CPaginationItem>
                    </CPagination>
                  </CCol>
                  <CCol md={1}>
                    총 {codeMasterDatas.totalCount}건
                  </CCol>
                </CRow>
              ) : ''}
            </CCardBody>
          </CCard>
          {selCodeDatas.code ? (
            <CCard className="mb-4">
              <CCardHeader>코드상세</CCardHeader>
              <CCardBody>
                <CTable align="middle" >
                  <CTableHead color="dark">
                    <CTableRow>
                      <CTableHeaderCell className="text-center">{selCodeDatas.id}</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">{selCodeDatas.code}</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">{selCodeDatas.description}</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                </CTable>
                <CTable align="middle" >
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableHeaderCell className="text-center">No</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">CODE_NM</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">CODE_ETC_1</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">CODE_ETC_2</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">사용여부</CTableHeaderCell>
                      <CTableHeaderCell className="text-center"></CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow v-for="item in tableItems" key="row222" >
                      <CTableDataCell className="text-center">
                        -
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CFormInput type="text" id="inputTrackNumber" value={tableReqData.numberOfSeats} onChange={(e) => setTableReqData({ ...tableReqData, numberOfSeats: e.target.value })} maxLength={5} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CFormInput type="text" id="inputTrackNumber" value={tableReqData.numberOfSeats} onChange={(e) => setTableReqData({ ...tableReqData, numberOfSeats: e.target.value })} maxLength={5} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CFormInput type="text" id="inputTrackNumber" value={tableReqData.numberOfSeats} onChange={(e) => setTableReqData({ ...tableReqData, numberOfSeats: e.target.value })} maxLength={5} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CFormSwitch id="formSwitchCheckChecked" defaultChecked="true" onChange={(e) => setTableReqData({ ...tableReqData, useYn: e.target.value })} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CButton color="info" shape="rounded-pill" className="mb-3" >
                          추가
                        </CButton>
                      </CTableDataCell>
                    </CTableRow>
                    {codeDatas.map((item, index) => (
                      <CTableRow v-for="item in tableItems" key={index} >
                        <CTableDataCell className="text-center">
                          <strong>{item.id}</strong>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <strong>{item.name}</strong>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <strong>{item.etc1}</strong>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <strong>{item.etc2}</strong>
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <CFormSwitch id="formSwitchCheckChecked" defaultChecked="true" onChange={(e) => setTableReqData({ ...tableReqData, useYn: e.target.value })} />
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          <CButton color="dark" shape="rounded-pill" className="mb-3" onClick={(e) => clickTableSong(e)}>
                            삭제
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    ))
                    }
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          ) :
            (
              ''
            )
          }
        </CCol>
      </CRow >
    </>
  )
}

export default CodeList
