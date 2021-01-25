package com.example.zombieboy.logindemo;

import android.annotation.SuppressLint;
import android.app.Fragment;
import android.graphics.Color;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;


@SuppressLint("ValidFragment")
public class HomeFragment extends Fragment {
    private LinearLayout cx_l1;
    private LinearLayout fb_l2;
    private LinearLayout qk_l3;
    private LinearLayout jy_l4;
    private TextView cx_tv;
    private TextView fb_tv;
    private TextView qk_tv;
    private TextView jy_tv;
    public HomeFragment() {

    }
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.home_fg_content,container,false);

        // Bind()
        cx_l1 = (LinearLayout) view.findViewById(R.id.cx_l1);
        fb_l2 = (LinearLayout) view.findViewById(R.id.fb_l2);
        qk_l3 = (LinearLayout) view.findViewById(R.id.qk_l3);
        jy_l4 = (LinearLayout) view.findViewById(R.id.jy_l4);

        cx_tv = (TextView) view.findViewById(R.id.cx_tv);
        fb_tv = (TextView) view.findViewById(R.id.fb_tv);
        qk_tv = (TextView) view.findViewById(R.id.qk_tv);
        jy_tv = (TextView) view.findViewById(R.id.jy_tv);

        // Onclick
        cx_l1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                initColor();
                cx_l1.setBackgroundColor(Color.parseColor( "#1184CB"));
                cx_tv.setTextColor(Color.parseColor( "#FFFFFF"));
            }
        });
        fb_l2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                initColor();
                fb_l2.setBackgroundColor(Color.parseColor( "#1184CB"));
                fb_tv.setTextColor(Color.parseColor( "#FFFFFF"));
            }
        });
        qk_l3.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                initColor();
                qk_l3.setBackgroundColor(Color.parseColor( "#1184CB"));
                qk_tv.setTextColor(Color.parseColor( "#FFFFFF"));
            }
        });
        jy_l4.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                initColor();
                jy_l4.setBackgroundColor(Color.parseColor( "#1184CB"));
                jy_tv.setTextColor(Color.parseColor( "#FFFFFF"));
            }
        });

        return view;
    }
    public void initColor() {
        cx_l1.setBackgroundColor(Color.parseColor( "#FFFFFF"));
        fb_l2.setBackgroundColor(Color.parseColor( "#FFFFFF"));
        qk_l3.setBackgroundColor(Color.parseColor( "#FFFFFF"));
        jy_l4.setBackgroundColor(Color.parseColor( "#FFFFFF"));
        cx_tv.setTextColor(Color.parseColor( "#000000"));
        fb_tv.setTextColor(Color.parseColor( "#000000"));
        qk_tv.setTextColor(Color.parseColor( "#000000"));
        jy_tv.setTextColor(Color.parseColor( "#000000"));
    }
}
