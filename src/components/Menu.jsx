import React from 'react';
import { Menu as AntMenu } from 'antd';

export default function Menu() {
  const items = [
    {
      key: 'home',
      label: 'Home',
    },
    {
      key: 'specs',
      label: '사양',
    },
    {
      key: 'gallery',
      label: '갤러리',
    },
    {
      key: 'history',
      label: '히스토리',
    },
    {
      key: 'official',
      label: '공식 페이지',
      children: [
        {
          key: 'ford-mustang',
          label: <a href="https://www.ford.com/cars/mustang/" target="_blank" rel="noopener noreferrer">Ford Mustang</a>,
        },
      ],
    },
  ];

  const handleMenuClick = (e) => {
    const { key } = e;
    
    // 앵커 링크 처리
    if (key === 'specs') {
      const element = document.getElementById('specs');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (key === 'gallery') {
      const element = document.getElementById('gallery');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (key === 'history') {
      const element = document.getElementById('history');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // 다른 키들은 필요에 따라 라우팅 처리 가능
  };

  return (
    <AntMenu
      mode="horizontal"
      items={items}
      onClick={handleMenuClick}
      style={{
        lineHeight: '64px',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
      theme="dark"
    />
  );
}
