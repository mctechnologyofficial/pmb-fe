/* eslint-disable */
import React, { useState, useEffect } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import { Form, Input, Radio, Select, Upload } from 'antd';
import LoadingButton from '@mui/lab/LoadingButton';
import Swal from 'sweetalert2';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'

const FormKonversiS1 = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    function handleClick() {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'success',
                title: 'Data Berhasil Disimpan!'
            })
        }, 1000)
    }

    const normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <>
            <MainCard title="Form Konversi S1">
                <Form
                    form={form}
                    layout='vertical'
                >
                    <Form.Item label="Nomor Induk Kependudukan (NIK)">
                        <Input placeholder="Masukkan NIK" />
                    </Form.Item>
                    <Form.Item label="Nama Lengkap">
                        <Input placeholder="Masukkan Nama Lengkap" />
                    </Form.Item>
                    <Form.Item label="Alamat">
                        <Input placeholder="Masukkan Alamat" />
                    </Form.Item>
                    <Form.Item label="Asal SMA/SMA/MA/Pendidikan Terakhir">
                        <Input placeholder="Masukkan Sekolah Asal" />
                    </Form.Item>
                    <Form.Item label="Jenis Kelamin">
                        <Radio.Group>
                            <Radio value={"Pria"}>Pria</Radio>
                            <Radio value={"Wanita"}>Wanita</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Nomor Whatsapp">
                        <Input placeholder="Masukkan Nomor Whatsapp" />
                    </Form.Item>
                    <Form.Item label="Scan Transkrip">
                        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                            <Upload.Dragger name="files" action="/upload.do">
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area</p>
                                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                            </Upload.Dragger>
                        </Form.Item>
                    </Form.Item>
                    <Form.Item label="Jalur Pendaftaran">
                        <Input disabled value={"Tranfer S1"} />
                    </Form.Item>
                    <Form.Item label="Pilih Program Studi">
                        <Select
                            showSearch
                            placeholder="Pilih Program Studi"
                            optionFilterProp="children"
                            // onChange={onChange}
                            // onSearch={onSearch}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={[
                                {
                                    value: 'MANAJEMEN S1 (Reguler)',
                                    label: 'MANAJEMEN S1 (Reguler)',
                                },
                                {
                                    value: 'MANAJEMEN S1 (Internasional)',
                                    label: 'MANAJEMEN S1 (Internasional)',
                                },
                                {
                                    value: 'TEKNIK INFORMATIKA',
                                    label: 'TEKNIK INFORMATIKA',
                                },
                                {
                                    value: 'SISTEM INFORMASI',
                                    label: 'SISTEM INFORMASI',
                                },
                                {
                                    value: 'REKAYASA PERANGKAT LUNAK',
                                    label: 'REKAYASA PERANGKAT LUNAK',
                                },
                                {
                                    value: 'KEWIRAUSAHAAN',
                                    label: 'KEWIRAUSAHAAN',
                                },
                                {
                                    value: 'KEBIDANAN',
                                    label: 'KEBIDANAN',
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="Email">
                        <Input placeholder="Masukkan Email" type='email' />
                    </Form.Item>
                    {/* <Form.Item label="Password">
                        <Input placeholder="Masukkan Password" type='password' />
                    </Form.Item> */}
                    <Form.Item>
                        <LoadingButton onClick={handleClick} loading={loading} loadingIndicator="Loading.." variant="outlined" color="primary">
                            Simpan
                        </LoadingButton>
                    </Form.Item>
                </Form>
            </MainCard>
        </>
    )
}

export default FormKonversiS1