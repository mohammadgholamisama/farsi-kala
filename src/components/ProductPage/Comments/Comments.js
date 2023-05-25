import React from 'react'
import './Comments.css'

export default function Comments({productTitle}) {
    return (
        <form className='comments'>
            <h4 className="comments-title">نقد و برسی ها</h4>
            <p className='comments-count'>هیچ دیدگاهی برای این محصول قبت نشده</p>
            <p className="first-comment-title">اولین کسی باشید که دیدگاهی می نوسید برای  <span className='text-danger'>" {productTitle} "</span></p>
            <p className='private-email-text'>نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند </p>

            <label className='comment-textarea-label' htmlFor="comment">دیدگاه شما :</label>
            <textarea className='comment-textarea' name="comment" id="comment" cols="45" rows="8" required></textarea>
            <div className="user-comment-info">
                <input type="text" name="username" placeholder='نام' />
                <input type="email" name="username" placeholder='پست الکترونیک' />
            </div>
            <button className='product-page-header-buy-add-btn mt-4 fs-5 px-4 py-2'>ثبت</button>
        </form>
    )
}
