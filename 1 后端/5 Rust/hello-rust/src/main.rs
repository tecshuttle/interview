#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> &'static str   {
    "Hello, world!"
}

//use chrono::prelude::*;
use mysql::prelude::*;
use mysql::*; // 用来处理日期

fn main() {
    rocket::ignite().mount("/", routes![index]).launch();

    //println!("Hello, world!");
    println!("MySQL Example.");

    let url = "mysql://root:tec007DB@www.tomtalk.net:3306/tomtalk";
    let pool = mysql::Pool::new(url).unwrap(); // 获取连接池
    let mut conn = pool.get_conn().unwrap(); // 获取链接

    conn.query_iter("select * from todo_projects")
        .unwrap()
        .for_each(|row| {
            let r: (i32, i32, String, String, i32) = from_row(row.unwrap());
            println!("{}, {}, {}, {}, {:?}", r.0, r.1, r.2, r.3, r.4);
        });
}
